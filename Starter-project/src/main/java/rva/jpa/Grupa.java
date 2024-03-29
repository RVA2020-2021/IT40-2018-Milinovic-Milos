package rva.jpa;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
/**
 * The persistent class for the grupa database table.
 * 
 */
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@NamedQuery(name="Grupa.findAll", query="SELECT g FROM Grupa g")


public class Grupa implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@SequenceGenerator(name="GRUPA_ID_GENERATOR", sequenceName="GRUPA_SEQ", allocationSize = 1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="GRUPA_ID_GENERATOR")
	
	
	private Integer id;
	private String oznaka;
	
	//bi-directional many-to-one association to Smijer
	
	@ManyToOne
	@JoinColumn(name="smijer")
	private Smijer smijer;
	//bi-directional many-to-one association to Student
	
	@OneToMany(mappedBy="grupa")
	@JsonIgnore
	private List<Student> students;
	public Grupa() {
	}
	public Integer getId() {
		return this.id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getOznaka() {
		return this.oznaka;
	}
	public void setOznaka(String oznaka) {
		this.oznaka = oznaka;
	}
	public Smijer getSmijer() {
		return this.smijer;
	}
	public void setSmijer(Smijer smijer) {
		this.smijer = smijer;
	}
	public List<Student> getStudents() {
		return this.students;
	}
	public void setStudents(List<Student> students) {
		this.students = students;
	}
	public Student addStudent(Student student) {
		getStudents().add(student);
		student.setGrupa(this);
		return student;
	}
	public Student removeStudent(Student student) {
		getStudents().remove(student);
		student.setGrupa(null);
		return student;
	}
}

