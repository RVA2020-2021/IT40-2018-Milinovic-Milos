package rva.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import rva.jpa.Grupa;


@Repository
public interface GrupaRepository extends JpaRepository<Grupa, Integer>{

	
	Collection<Grupa> findByOznakaContainingIgnoreCase(String oznaka);
}
