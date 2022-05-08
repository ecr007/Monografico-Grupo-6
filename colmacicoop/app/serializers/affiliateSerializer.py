from rest_framework import serializers
from app.models import Affiliate

class AffiliateSerializer(serializers.ModelSerializer):
    def validate_cedula(self, cedula):

        # La cédula debe tener 11 dígitos
        cedula = cedula.replace('-','')

        if len(cedula)== 11:
            
            if (int(cedula[0:3]) < 122 and int(cedula[0:3]) > 0 or int(cedula[0:3]) == 402):
                
                suma = 0
                mutliplicador = 1
                verificador = 0

                # Los dígitos pares valen 2 y los impares 1
                mutliplicador = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2]
                
                for i in range(10):

                    # Se multiplica cada dígito por su paridad
                    digito = int(cedula[i])*mutliplicador[i]

                    # Si la multiplicación da de dos dígitos, se suman entre sí
                    if(digito>9):
                        digito = digito//10 + digito%10

                    # Y se va haciendo la acumulación de esa suma
                    suma = suma + digito

                # Al final se obtiene el verificador con la siguiente fórmula
                verificador = (10 - (suma % 10) ) % 10

                # Se comprueba que coincidan
                if(verificador == int(cedula[10]) ):
                    return cedula
                # El dígito verificador no es válido
                else:
                    raise serializers.ValidationError("Cédula invalida.")
            # La serie no es válida
            else:
                raise serializers.ValidationError("Cédula invalida.")
        # No tiene 11 dígitos
        else:
            raise serializers.ValidationError("Cédula incompleta.")
                
    class Meta:
        model = Affiliate
        fields = '__all__'