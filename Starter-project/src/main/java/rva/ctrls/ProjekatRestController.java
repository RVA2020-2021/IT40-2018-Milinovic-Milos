package rva.ctrls;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import rva.jpa.Projekat;
import rva.repository.ProjekatRepository;

@RestController
public class ProjekatRestController {
	
	
	@Autowired
	private ProjekatRepository projekatRepository;

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@GetMapping("projekat")
	public Collection<Projekat> getProjekti(){
		return projekatRepository.findAll();
	}
	
	
	
	@GetMapping("dobavljac/{id}")
	public Projekat getProjekat(@PathVariable Integer id) {
		return projekatRepository.getOne(id);
	}

	@GetMapping("projekatNaziv/{naziv}")
	public Collection<Projekat> getDobavljacByNaziv(@PathVariable String naziv){
		return projekatRepository.findByNazivContainingIgnoreCase(naziv);
	}
	
	@PostMapping("projekat")
	public ResponseEntity<Projekat> insertDobavljac(@RequestBody Projekat projekat){
		if(!projekatRepository.existsById(projekat.getId())) {
			projekatRepository.save(projekat);
			return new ResponseEntity<Projekat>(HttpStatus.OK);
		}
		return new ResponseEntity<Projekat>(HttpStatus.CONFLICT);
	}
	
	@PutMapping("projekat")
	public ResponseEntity<Projekat> updateDobavljac(@RequestBody Projekat projekat){
		if(!projekatRepository.existsById(projekat.getId())) {
			return new ResponseEntity<Projekat>(HttpStatus.NO_CONTENT);
		}
		projekatRepository.save(projekat);
		return new ResponseEntity<Projekat>(HttpStatus.OK);
	}

	@DeleteMapping("projekat/{id}")
	public ResponseEntity<Projekat> deleteDobavljac(@PathVariable Integer id){
		if(!projekatRepository.existsById(id)) {
			return new ResponseEntity<Projekat>(HttpStatus.NO_CONTENT);
		}
		projekatRepository.deleteById(id);
		if (id == -100) {
			jdbcTemplate.execute("insert into \"projekat\" (\"id\", \"naziv\", \"oznaka\", \"opis\") "
					+ "values (-100, 'Test naziv', 'Test oznaka', 'Opis projekta')");
		}
		return new ResponseEntity<Projekat>(HttpStatus.OK);

	}
	
	

	
	
	
	

}
