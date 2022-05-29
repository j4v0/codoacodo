function Subir()
{
var formulario="";
var usuario=document.form1.usuario.value;
var nombre=document.form1.nombre.value;
var apellido=document.form1.apellido.value;
var email=document.form1.email.value;
var clave1=document.form1.clave1.value;
var clave2=document.form1.clave2.value;
var opcion="";
var b=document.form1.hobby.length;
for(a=0;a<b;a++)
{
if (document.form1.hobby[a].checked)
    opcion+=document.form1.hobby[a].value + ", ";
}
var pais=document.form1.pais.value;
var sexo=document.form1.sexo.value;
if (usuario=="" || nombre=="" || apellido=="" || pais=="" )
{
    alert("¡Los campos con asterisco son obligatorios!");
    return false;
}
if (opcion.length==0)
{
    alert("¡Debes seleccionar al menos una preferencia!");
    return false;
}
if ((clave1!=clave2) || (clave1==""))
{
    alert("¡Las claves deben ser iguales y no pueden ser en blanco!");
    return false;
}
if (email=="") email="No informado";
if (sexo=="") sexo="No informado";
formulario="Usuario: " + usuario + "\nNombre: " + nombre + "\nApellido: " + apellido + "\n"
     + "E-mail: " + email + "\nClave: " + clave1  + "\nopcion: " + opcion + "\nPais: "
    + pais + "\nSexo: " + sexo;
alert(formulario);	
}
