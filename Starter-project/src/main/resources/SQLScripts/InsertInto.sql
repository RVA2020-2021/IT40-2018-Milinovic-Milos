--SMIJER podaci

insert into smijer ("id","naziv","oznaka")
values(nextval('smijer_seq'),'Inzinjerstvo informacionih sistema','IT');
insert into smijer ("id","naziv","oznaka")
values(nextval('smijer_seq'), 'Informacioni inzinjering','IN');
insert into smijer ("id","naziv","oznaka")
values(nextval('smijer_seq'),'Softversko inzinjerstvo i informacione tehnologije','SIIT');
insert into smijer ("id","naziv","oznaka")
values(nextval('smijer_seq'),'Racunarstvo i automatika','RA');
insert into smijer ("id","naziv","oznaka")
values(nextval('smijer_seq'),'Primjenjeno softversko inzinjerstvo','PR');

select * from smijer;



--GRUPA podaci

insert into grupa ("id","oznaka","smijer")
values(nextval('grupa_seq'),'IT',2);
insert into grupa ("id","oznaka","smijer")
values(nextval('grupa_seq'),'IN',2);
insert into grupa ("id","oznaka","smijer")
values(nextval('grupa_seq'),'SIIT',3);
insert into grupa ("id","oznaka","smijer")
values(nextval('grupa_seq'),'RA',4);
insert into grupa ("id","oznaka","smijer")
values(nextval('grupa_seq'),'PR',5);

select * from grupa;


--PROJEKAT podaci

insert into projekat ("id","naziv","oznaka","opis")
values(nextval('projekat_seq'),'Inzinjerstvo informacionih sistema','IT','Studijski program koji se bavi projektovanjem informacionih sistema');
insert into projekat ("id","naziv","oznaka","opis")
values(nextval('projekat_seq'),'Informacioni inzinjering','IN','Studijski program koji se obradom informacija ');
insert into projekat ("id","naziv","oznaka","opis")
values(nextval('projekat_seq'),'Softversko inzinjerstvo i informacione tehnologije','SIIT','Studijski program koji primat stavlja na programiranje');
insert into projekat ("id","naziv","oznaka","opis")
values(nextval('projekat_seq'),'Racunarstvo i automatika','RA','Studijski program koji se bavi automatizacijom procesa i izucavanjem hardverskih dijelova racunara vecinom');
insert into projekat ("id","naziv","oznaka","opis")
values(nextval('projekat_seq'),'Primjenjeno softversko inzinjerstvo','PR','Studijski program koji se bavi izgradnjom softvera koji ce pomoci u boljem funkcionisanju elektroenergetskih sistema');


select * from projekat;




--Student podaci

insert into student ("id","ime","prezime","broj_indeksa","grupa","projekat")
values(nextval('student_seq'),'Milos','Milinovic','IT40/2018',2,3);
insert into student ("id","ime","prezime","broj_indeksa","grupa","projekat")
values(nextval('student_seq'),'Dragan','Majkic','IT32/2018',2,4);
insert into student ("id","ime","prezime","broj_indeksa","grupa","projekat")
values(nextval('student_seq'),'Nemanja','MilUnovic','IT33/2018',4,1);
insert into student ("id","ime","prezime","broj_indeksa","grupa","projekat")
values(nextval('student_seq'),'Branimir','Prodic','IT28/2018',5,3);
insert into student ("id","ime","prezime","broj_indeksa","grupa","projekat")
values(nextval('student_seq'),'Stefan','Fink','IT37/2018',3,5);

select * from student;
