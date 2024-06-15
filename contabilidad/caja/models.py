from django.db import models

class MovimientoCaja(models.Model):
    fecha = models.DateField()
    tipo = models.CharField(max_length=10)  # Entrada o Salida
    monto = models.DecimalField(max_digits=10, decimal_places=2)
    descripcion = models.CharField(max_length=255)

    def __str__(self):
        return f'Movimiento {self.id} - {self.tipo}'
