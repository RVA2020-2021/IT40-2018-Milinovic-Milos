package rva.ctrls;

import java.util.Collection;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import rva.jpa.Student;
import rva.repository.StudentRepository;

@CrossOrigin
@RestController
@Api(tags = {"Student CRUD operacije"})
public class StudentRestController {
	
	@Autowired
	private StudentRepository studentRepository;
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@GetMapping("student") 
	@ApiOperation(value = "Vraca kolekciju svih studenata iz baze podataka")
		public Collection<Student> getStudenti() {
			return studentRepository.findAll();
		
	}
	
	@GetMapping("student/{id}")
	@ApiOperation(value = "Vraca studenta iz baze podataka ciji je id prosljedjen kao path varijabla")
	public Student getStudent(@PathVariable("id") Integer id) {
		return studentRepository.getOne(id);
	}
	
	@GetMapping("studentBrojIndeksa/{brojIndeksa}")
	@ApiOperation(value = "Vraca studenta iz baze podataka cija je broj indeksa prosljedjen kao path varijabla")
	public Collection<Student> getStudentByBrojIndeksa(@PathVariable("brojIndeksa") String brojIndeksa) {
		return studentRepository.findByBrojIndeksaContainingIgnoreCase(brojIndeksa);
	}
	
	@PostMapping("student")
	@ApiOperation(value = "Upisuje studenta u bazu")
	public ResponseEntity<Student> insertStudent(@RequestBody Student student) {
		if (!studentRepository.existsById(student.getId())) {
			studentRepository.save(student);
			return new ResponseEntity<Student>(HttpStatus.OK);
		}
		return new ResponseEntity<Student>(HttpStatus.CONFLICT);
	}
	
	@PutMapping("student")
	@ApiOperation(value = "Modifikuje vrijednosti vezane za studenta")
	public ResponseEntity<Student> updateStudent(@RequestBody Student student) {
		if (!studentRepository.existsById(student.getId())) {
			return new ResponseEntity<Student>(HttpStatus.NO_CONTENT);
		}
		studentRepository.save(student);
		return new ResponseEntity<Student>(HttpStatus.OK);
	}
	
	@Transactional
	@DeleteMapping("student/{id}")
	@ApiOperation(value = "Brise grupu iz baze podataka ciji je id prosljedjen kao path varijabla")
	public ResponseEntity<Student> deleteStudent(@PathVariable("id") Integer id) {
		if (!studentRepository.existsById(id)) {
			return new ResponseEntity<Student>(HttpStatus.NO_CONTENT);
		}
		jdbcTemplate.execute("delete from student where grupa = " + id);
		jdbcTemplate.execute("delete from student where projekat = " + id);
		
		studentRepository.deleteById(id);
	
		if (id == -100) {
			jdbcTemplate.execute("insert into \"student\" (\"id\", \"ime\", \"prezime\", \"broj indeksa\", \"grupa\", \"projekat\") "
					+ "values (-100, 'Milos', 'Milosevic', 'IT58/2018','3','2')");
		}
		return new ResponseEntity<Student>(HttpStatus.OK);
	}
	

}
