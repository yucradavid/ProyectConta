from django.db import models

class Empleado(models.Model):
    nombre = models.CharField(max_length=255)
    salario = models.DecimalField(max_digits=10, decimal_places=2)
    bonos = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    descuentos = models.DecimalField(max_digits=10, decimal_places=2, default=0)

    def __str__(self):
        return self.nombre

class Remuneracion(models.Model):
    empleado = models.ForeignKey(Empleado, on_delete=models.CASCADE)
    fecha = models.DateField()
    salario_neto = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f'Remuneracion {self.id} - {self.empleado.nombre}'
