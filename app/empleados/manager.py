from .models import Empleado
def roles(remu, context):
    for r in remu:
        empleado = Empleado.objects.filter(id = r.identificacion_id).order_by("id")
        dias = float(r.dias)
        totalIngresos = float(r.valor25) +float(r.valor50)+float(r.valor100)+float(r.comisiones)+float(r.bonoAdicional)
        totalEgresos = float(r.IESSpersonal) 
        + float(r.retencionIR)
        + float(r.prestamoIESS)
        +float(r.extConyuges)
        +float(r.otrosDescuentos)
        +float(r.multas) 
        +float(r.anticipos)
        +float(r.otrosPrestamos)
        totalOtrosIngresos = float(r.movilizacion) +float(r.transporte) +float(r.pagoXIII) +float(r.pagoXIV) +float(r.pagoFR) +float(r.pagoVacaciones)
        
        for datos in empleado:
            salarioNominal = float(datos.salarioNominal)
            print(salarioNominal)
    
    
    salarioMensual = salarioNominal/30*dias
    print(salarioMensual)
    totalIngresos = totalIngresos + float(salarioMensual)
    totalPagar = totalIngresos - totalEgresos + totalOtrosIngresos
    context["rem"] = {
        "salarioMensual": salarioMensual,
        "totalIngresos": totalIngresos,
        "totalEgresos": totalEgresos, 
        "totalOtrosIngresos": totalOtrosIngresos,
        "totalPagar": totalPagar,
        }
    
def obtenerData (data, Empleado):
        ab = []
        
        for datos in data:
                empl = Empleado.objects.filter(id = datos.identificacion_id)
                print(datos)
                for a in empl:
                
                                print(empl)
                                salarioNominal = float(a.salarioNominal)
                                dias = int(datos.dias)
                                nombresCompletos = a.primerNombre + " " + a.segundoNombre + " " + a.primerApellido + " " + a.segundoApellido
                                salarioMensual = "{0:.2f}".format(salarioNominal/30*dias)
                                totalIngresos = "{0:.2f}".format(
                                        float(salarioMensual) 
                                        + float(datos.valor25) 
                                        + float(datos.valor50) 
                                        + float(datos.valor100)
                                        + float(datos.comisiones) 
                                        + float(datos.bonoAdicional)
                                )
                                totalEgresos= "{0:.2f}".format(
                                        float(datos.IESSpersonal)
                                        + float(datos.retencionIR)
                                        + float(datos.prestamoIESS)
                                        + float(datos.extConyuges)
                                        + float(datos.otrosDescuentos)
                                        + float(datos.multas)
                                        + float(datos.anticipos)
                                        + float(datos.otrosPrestamos)
                                )
                                print(totalEgresos)
                                totalOtrosIngresos= "{0:.2f}".format(
                                        float(datos.movilizacion)
                                        + float(datos.transporte)
                                        + float(datos.pagoXIII)
                                        + float(datos.pagoXIV)
                                        + float(datos.pagoFR)
                                        + float(datos.pagoVacaciones)
                                )
                                totalApagar= "{0:.2f}".format(
                                        float(totalIngresos)
                                        - float(totalEgresos)
                                        + float(totalOtrosIngresos)
                                )


                                valor = {
                                        "rem_id": datos.id,
                                        "rem_identificacion": datos.identificacion_id,
                                        "rem_nombresCompletos": nombresCompletos,
                                        "emp_id": a.identificacion,
                                        "rem_ano": datos.ano,
                                        "rem_mes": datos.mes,
                                        "emp_salarioNominal": salarioNominal,
                                        "rem_dias": dias,
                                        "emp_salarioMensual": salarioMensual,
                                        "rem_valor25": datos.valor25,
                                        "rem_valor50": datos.valor50,
                                        "rem_valor100": datos.valor100,
                                        "rem_comisiones": datos.comisiones,
                                        "rem_bonoAdicional": datos.bonoAdicional,
                                        "rem_totalIngresos": totalIngresos,

                                        "rem_IESSpersonal": datos.IESSpersonal,
                                        "rem_retencionIR": datos.retencionIR,
                                        "rem_prestamoIESS": datos.prestamoIESS,
                                        "rem_extConyuges": datos.extConyuges,
                                        "rem_otrosDescuentos": datos.otrosDescuentos,
                                        "rem_multas": datos.multas,
                                        "rem_anticipos": datos.anticipos,
                                        "rem_otrosPrestamos": datos.otrosPrestamos,
                                        "rem_totalEgresos": totalEgresos,

                                        "rem_valorXIII": datos.valorXIII,
                                        "rem_valorXIV": datos.valorXIV,
                                        "rem_vacaciones": datos.vacaciones,
                                        "rem_fondoReserva": datos.fondoReserva,
                                        "rem_IESSpatr": datos.IESSpatr,
                                        "rem_totalOtrosIngresos": totalOtrosIngresos,
                                        "rem_totalApagar": totalApagar,



                                }
                                ab.append(valor)
        return ab