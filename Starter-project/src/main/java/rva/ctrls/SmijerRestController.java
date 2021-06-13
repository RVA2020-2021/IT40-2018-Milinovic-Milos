package rva.ctrls;

import java.util.Collection;

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
import rva.jpa.Smijer;
import rva.repository.SmijerRepository;

@CrossOrigin
@RestController
@Api(tags = {"Smijer CRUD operacije"})
public class SmijerRestController {
	
	@Autowired
	private SmijerRepository smijerRepository;
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@GetMapping("smijer") 
	@ApiOperation(value = "Vraca kolekciju svih smijerova iz baze podataka")
		public Collection<Smijer> getSmijerovi() {
			return smijerRepository.findAll();
		
	}
	
	@GetMapping("smijer/{id}")
	@ApiOperation(value = "Vraca smijer iz baze podataka ciji je id prosljedjen kao path varijabla")
	public Smijer getSmijer(@PathVariable("id") Integer id) {
		return smijerRepository.getOne(id);
	}
	
	@GetMapping("smijerOznaka/{oznaka}")
	@ApiOperation(value = "Vraca smijer iz baze podataka cija je oznaka prosljedjena kao path varijabla")
	public Collection<Smijer> getSmijerByOznaka(@PathVariable("oznaka") String oznaka) {
		return smijerRepository.findByOznakaContainingIgnoreCase(oznaka);
	}
	
	@PostMapping("smijer")
	@ApiOperation(value = "Upisuje grupu u bazu")
	public ResponseEntity<Smijer> insertSmijer(@RequestBody Smijer smijer) {
		if (!smijerRepository.existsById(smijer.getId())) {
			smijerRepository.save(smijer);
			return new ResponseEntity<Smijer>(HttpStatus.OK);
		}
		return new ResponseEntity<Smijer>(HttpStatus.CONFLICT);
	}
	
	@PutMapping("smijer")
	@ApiOperation(value = "Modifikuje vrijednosti vezane za smijer")
	public ResponseEntity<Smijer> updateSmijer(@RequestBody Smijer smijer) {
		if (!smijerRepository.existsById(smijer.getId())) {
			return new ResponseEntity<Smijer>(HttpStatus.NO_CONTENT);
		}
		smijerRepository.save(smijer);
		return new ResponseEntity<Smijer>(HttpStatus.OK);
	}
	
	@DeleteMapping("smijer/{id}")
	@ApiOperation(value = "Brise smijer iz baze podataka ciji je id prosljedjen kao path varijabla")
	public ResponseEntity<Smijer> deleteSmijer(@PathVariable("id") Integer id) {
		if (!smijerRepository.existsById(id)) {
			return new ResponseEntity<Smijer>(HttpStatus.NO_CONTENT);
		}
		smijerRepository.deleteById(id);
		
		if (id == -100) {
			jdbcTemplate.execute("insert into \"smijer\" (\"id\", \"naziv\", \"oznaka\") "
					+ "values (-100, 'Naziv smijera', 'EE')");
		}
		return new ResponseEntity<Smijer>(HttpStatus.OK);
	}
	
	

}
