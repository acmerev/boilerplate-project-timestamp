import java.text.SimpleDateFormat;
import java.util.Date;

public class Fechas {

    public static void main(String[] args) {

        String patron = "E, dd MMM yyyy HH:mm:ss";
        SimpleDateFormat formatoFecha = new SimpleDateFormat(patron);
        String fecha = formatoFecha.format(new Date());
        System.out.println(fecha);

        String patron2 = "E, dd MMMM yyyy";

        SimpleDateFormat formatoFechaSimple = new SimpleDateFormat(patron2);
        String fecha2 = formatoFechaSimple.format(new Date());

        System.out.println(fecha2);



    }
}