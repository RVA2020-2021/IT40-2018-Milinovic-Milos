package rva.jpa;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;


/**
 * The persistent class for the smijer database table.
 * 
 */
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@NamedQuery(name="Smijer.findAll", query="SELECT s FROM Smijer s")
public class Smijer implements Serializable {
	private static final long serialVersionUID = 1L;
//s
	@Id
	@SequenceGenerator(name="SMIJER_ID_GENERATOR", sequenceName="SMIJER_SEQ", allocationSize = 1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="SMIJER_ID_GENERATOR")
	private Integer id;

	private String naziv;
	private String oznaka;

	//bi-directional many-to-one association to Grupa
	@OneToMany(mappedBy="smijer")
	@JsonIgnore
	private List<Grupa> grupas;

	public Smijer() {
	}
	public Integer getId() {
		return this.id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getNaziv() {
		return this.naziv;
	}
	public void setNaziv(String naziv) {
		this.naziv = naziv;
	}
	public String getOznaka() {
		return this.oznaka;
	}
	public void setOznaka(String oznaka) {
		this.oznaka = oznaka;
	}
	public List<Grupa> getGrupas() {
		return this.grupas;
	}
	public void setGrupas(List<Grupa> grupas) {
		this.grupas = grupas;
	}
	public Grupa addGrupa(Grupa grupa) {
		getGrupas().add(grupa);
		grupa.setSmijer(this);
		return grupa;
	}
	public Grupa removeGrupa(Grupa grupa) {
		getGrupas().remove(grupa);
		grupa.setSmijer(null);
		return grupa;
	}

}