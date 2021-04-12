package rva.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import rva.jpa.Projekat;

@Repository
public interface ProjekatRepository extends JpaRepository<Projekat, Integer> {

	Collection<Projekat> findByNazivContainingIgnoreCase(String naziv);
}
//s