package rva.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import rva.jpa.Smijer;

@Repository
public interface SmijerRepository extends JpaRepository<Smijer,Integer> {

	Collection<Smijer> findByOznakaContainingIgnoreCase(String oznaka);
}
