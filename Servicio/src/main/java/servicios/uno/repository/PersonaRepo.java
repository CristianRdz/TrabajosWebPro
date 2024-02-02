package servicios.uno.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import servicios.uno.model.Persona;

public interface  PersonaRepo extends JpaRepository<Persona,Long> {
    @Query("SELECT p FROM Persona p WHERE " +
            "p.name LIKE %:query% OR " +
            "p.lastname LIKE %:query% OR " +
            "p.firstname LIKE %:query% OR " +
            "p.address LIKE %:query% OR " +
            "p.birthday LIKE %:query% OR " +
            "p.email LIKE %:query% OR " +
            "p.numberPhone LIKE %:query%")
    Page<Persona> findByAllFieldsContaining(@Param("query") String query, Pageable pageable);
}
