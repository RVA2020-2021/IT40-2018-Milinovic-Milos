DROP SEQUENCE IF EXISTS grupa_seq;
DROP SEQUENCE IF EXISTS smijer_seq;
DROP SEQUENCE IF EXISTS projekat_seq;
DROP SEQUENCE IF EXISTS student_seq;

DROP TABLE IF EXISTS grupa CASCADE;
DROP TABLE IF EXISTS smijer CASCADE;
DROP TABLE IF EXISTS projekat CASCADE;
DROP TABLE IF EXISTS student CASCADE;

create table smijer(
	id integer not null,
	naziv varchar(100),
	oznaka varchar(50)
);

CREATE TABLE projekat(
	id integer not null,
	naziv varchar(100),
	oznaka varchar(10),
	opis varchar(500)	
);

create table grupa(
	id integer not null,
	oznaka varchar(10),
	smijer integer
);

create table student(
	id integer not null,
	ime varchar(50),
	prezime varchar(50),
	broj_indeksa varchar(20),
	grupa integer,
	projekat integer	
);

select * from student;

ALTER TABLE smijer ADD CONSTRAINT pk_smijer PRIMARY KEY(id);
ALTER TABLE grupa ADD CONSTRAINT pk_grupa PRIMARY KEY(id);
ALTER TABLE projekat ADD CONSTRAINT pk_projekat PRIMARY KEY(id);
ALTER TABLE student ADD CONSTRAINT pk_student PRIMARY KEY(id);

ALTER TABLE student ADD CONSTRAINT fk_student_grupa FOREIGN KEY(grupa) REFERENCES grupa(id);

ALTER TABLE grupa ADD CONSTRAINT fk_grupa_smijer FOREIGN KEY(smijer) REFERENCES smijer(id);

ALTER TABLE student ADD CONSTRAINT fk_student_projekat FOREIGN KEY(projekat) REFERENCES projekat(id);

CREATE INDEX idxpk_smijer ON smijer(id);
CREATE INDEX idxpk_projekat ON projekat(id);
CREATE INDEX idxpk_grupa ON grupa(id);
CREATE INDEX idxpk_student ON student(id);

CREATE INDEX idxfk_grupa_smijer ON grupa(smijer);
CREATE INDEX idxfk_student_grupa ON student(grupa);
CREATE INDEX idxfk_student_projekat ON student(projekat);


create sequence grupa_seq
increment 1;
create sequence smijer_seq
increment 1;
create sequence projekat_seq
increment 1;
create sequence student_seq
increment 1;