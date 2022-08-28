
//ALERTAS DE ACCIONES REALIZADAS

function editarEmpleado(id) {
  Swal.fire({
    "title": "Desea editar el siguiente registro?",

    "icon": "question",
    "showCancelButton": true,
    "cancelButtonText": "No, Cancelar",
    "confirmButtonText": "Si, Editar",
    "reverseButtons": true,
    "confirmButtonColor": "red",

  })
    .then(function (result) {
      if (result.isConfirmed) {
        window.location.href = "editaEmpleados/" + id + "/"
      }
    })
};

function editaritem(id) {
  Swal.fire({
    "title": "Desea editar el siguiente registro?",

    "icon": "question",
    "showCancelButton": true,
    "cancelButtonText": "No, Cancelar",
    "confirmButtonText": "Si, Editar",
    "reverseButtons": true,
    "confirmButtonColor": "red",

  })
    .then(function (result) {
      if (result.isConfirmed) {
        window.location.href = "../editaitem/" + id + "/"
      }
    })
};

function eliminarEmpleado(id, ident, a, b, c, d) {
  Swal.fire({
    "title": "Estás seguro de eliminar el registro?",
    "text": "Empleado CI: " + ident + " Nombres: " + a + " " + b + " " + c + " " + d,
    "icon": "warning",
    "showCancelButton": true,
    "cancelButtonText": "No, Cancelar",
    "confirmButtonText": "Si, Eliminar",
    "reverseButtons": true,
    "confirmButtonColor": "red",

  })
    .then(function (result) {
      if (result.isConfirmed) {
        window.location.href = "deleteEmpleado/" + id + "/"
      }
    })
};



function editaRol(id) {
  Swal.fire({
    "title": "Desea editar el siguiente registro?",

    "icon": "question",
    "showCancelButton": true,
    "cancelButtonText": "No, Cancelar",
    "confirmButtonText": "Si, Editar",
    "reverseButtons": true,
    "confirmButtonColor": "red",

  })
    .then(function (result) {
      if (result.isConfirmed) {
        window.location.href = "../editaRol/" + id + "/"
      }
    })
};

function editarcuenta(id) {
  Swal.fire({
    "title": "Desea editar el siguiente registro?",

    "icon": "question",
    "showCancelButton": true,
    "cancelButtonText": "No, Cancelar",
    "confirmButtonText": "Si, Editar",
    "reverseButtons": true,
    "confirmButtonColor": "red",

  })
    .then(function (result) {
      if (result.isConfirmed) {
        window.location.href = "../editarcuenta/" + id + "/"
      }
    })
};


function verRol(id) {
  Swal.fire({
    "title": "Desea editar el siguiente registro?",

    "icon": "question",
    "showCancelButton": true,
    "cancelButtonText": "No, Cancelar",
    "confirmButtonText": "Si, Editar",
    "reverseButtons": true,
    "confirmButtonColor": "red",

  })
    .then(function (result) {
      if (result.isConfirmed) {
        window.location.href = "../verRol/" + id + "/"
      }
    })
};

function eliminaRol(id, ident, a, b) {
  Swal.fire({
    "title": "Estás seguro de eliminar el registro del Rol?",
    "text": "Empleado: " + ident + " del Año: " + a + " del MES: " + b,
    "icon": "warning",
    "showCancelButton": true,
    "cancelButtonText": "No, Cancelar",
    "confirmButtonText": "Si, Eliminar",
    "reverseButtons": true,
    "confirmButtonColor": "red",

  })
    .then(function (result) {
      if (result.isConfirmed) {
        window.location.href = "../eliminaRol/" + id + "/"
      }
    })
};

function eliminaCentro(id, ident) {
  Swal.fire({
    "title": "Estás seguro de eliminar el registro del Rol?",
    "text": "Centro de Costos: " + ident,
    "icon": "warning",
    "showCancelButton": true,
    "cancelButtonText": "No, Cancelar",
    "confirmButtonText": "Si, Eliminar",
    "reverseButtons": true,
    "confirmButtonColor": "red",

  })
    .then(function (result) {
      if (result.isConfirmed) {
        window.location.href = "../eliminacentro/" + id + "/"
      }
    })
};

function eliminaitem(id, ident) {
  Swal.fire({
    "title": "Estás seguro de eliminar el registro del Rol?",
    "text": "PRODUCTO: " + ident,
    "icon": "warning",
    "showCancelButton": true,
    "cancelButtonText": "No, Cancelar",
    "confirmButtonText": "Si, Eliminar",
    "reverseButtons": true,
    "confirmButtonColor": "red",

  })
    .then(function (result) {
      if (result.isConfirmed) {
        window.location.href = "../eliminaitem/" + id + "/"
      }
    })
};

function eliminaDpto(id, ident) {
  Swal.fire({
    "title": "Estás seguro de eliminar el registro del Sistema?",
    "text": "Departamento: " + ident,
    "icon": "warning",
    "showCancelButton": true,
    "cancelButtonText": "No, Cancelar",
    "confirmButtonText": "Si, Eliminar",
    "reverseButtons": true,
    "confirmButtonColor": "red",

  })
    .then(function (result) {
      if (result.isConfirmed) {
        window.location.href = "../eliminacentro/" + id + "/"
      }
    })
};

function eliminaDcto(id, ident) {
  Swal.fire({
    "title": "Estás seguro de eliminar el registro del Sistema?",
    "text": "Documento: " + ident,
    "icon": "warning",
    "showCancelButton": true,
    "cancelButtonText": "No, Cancelar",
    "confirmButtonText": "Si, Eliminar",
    "reverseButtons": true,
    "confirmButtonColor": "red",

  })
    .then(function (result) {
      if (result.isConfirmed) {
        window.location.href = "../eliminadcto/" + id + "/"
      }
    })
};

function eliminaTitem(id, ident) {
  Swal.fire({
    "title": "Estás seguro de eliminar el registro del Sistema?",
    "text": "Tipo de Item: " + ident,
    "icon": "warning",
    "showCancelButton": true,
    "cancelButtonText": "No, Cancelar",
    "confirmButtonText": "Si, Eliminar",
    "reverseButtons": true,
    "confirmButtonColor": "red",

  })
    .then(function (result) {
      if (result.isConfirmed) {
        window.location.href = "../eliminatitem/" + id + "/"
      }
    })
};

function eliminacuenta(id, ident) {
  Swal.fire({
    "title": "Estás seguro de eliminar el registro del Sistema?",
    "text": "Cuenta Contable: " + ident,
    "icon": "warning",
    "showCancelButton": true,
    "cancelButtonText": "No, Cancelar",
    "confirmButtonText": "Si, Eliminar",
    "reverseButtons": true,
    "confirmButtonColor": "red",

  })
    .then(function (result) {
      if (result.isConfirmed) {
        window.location.href = "../eliminacuenta/" + id + "/"
      }
    })
};

function eliminaCia(id, ident) {
  Swal.fire({
    "title": "Estás seguro de eliminar el registro del Sistema?",
    "text": "Compania: " + ident,
    "icon": "warning",
    "showCancelButton": true,
    "cancelButtonText": "No, Cancelar",
    "confirmButtonText": "Si, Eliminar",
    "reverseButtons": true,
    "confirmButtonColor": "red",

  })
    .then(function (result) {
      if (result.isConfirmed) {
        window.location.href = "../eliminacia/" + id + "/"
      }
    })
};

//FIN DE ALERTAS DE ACCIONES REALIZADAS
// FUNCIONES PERSONALIZADAS PARA EJECUTAR PROCESOS
function downloadCSV(csv, filename) {
  var csvFile;
  var downloadLink;

  // CSV file
  csvFile = new Blob([csv], { type: "text" });

  // Download link
  downloadLink = document.createElement("a");

  // File name
  downloadLink.download = filename;

  // Create a link to the file
  downloadLink.href = window.URL.createObjectURL(csvFile);

  // Hide download link
  downloadLink.style.display = "none";

  // Add the link to DOM
  document.body.appendChild(downloadLink);

  // Click download link
  downloadLink.click();
}
function exportTableToCSV(comp, establ, ano, mes) {

  $.ajax({
    url: "/configuraciones/compania",
    context: document.body
  }).done(function (data) {
    var comp = data[0].id_cia
    var estab = data[0].estab
    var filename = "aportesextra.csv"
    var csv = [];
    var rows = document.querySelectorAll("tbody tr");
    console.log(rows.length)

    for (var i = 0; i < rows.length; i++) {
      var columna = rows[i].querySelectorAll("td");
      console.log(columna[2].innerText)
      var row = comp + ";" + estab + ";" + columna[4].innerText + ";" + columna[5].innerText + ";" + "MSU;" + columna[2].innerText + ";" + columna[6].innerText
      csv.push(row)
    }
    // Download CSV file
    downloadCSV(csv.join("\n"), filename);
  });
}

function compania() {

  $.ajax({
    url: "/configuraciones/compania",
    context: document.body
  }).done(function (data) {
    var comp = data[0].id_cia + " --- " + data[0].id_rs
    var compania = document.getElementById("compania")
    compania.innerText = comp

  });
};

function cargar() {
  var id = document.getElementById("id_identificacion").value;
  var data = { id: id }
  fetch("{% url 'empleados:empleadorol' %}", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'X-CSRFToken': getCookie('csrftoken'),
    },
  }).then(function (response) {
    return response.json()
  }).then(
    function (data) {
      var salario = data.data[0].salarioNominal
      var nc = data.data[0].primerNombre + " " + data.data[0].segundoNombre + " " + data.data[0].primerApellido + " " + data.data[0].segundoApellido
      var acmXIII = data.data[0].acumulacionXIII
      var acmXIV = data.data[0].acumulacionXIV
      var acmFR = data.data[0].acumulacionFR
      var dias = data.data[0].fechaInicio
      var fechainicio = new Date(dias)
      var año = parseInt(document.getElementById("id_ano").value)
      console.log(año)
      var mes = parseInt(document.getElementById("id_mes").value)
      if (mes === 2) {
        fechaf = new Date(año, mes - 1, 28)
        fechai = new Date(año, mes - 1, 1)
      }
      else {
        fechaf = new Date(año, mes - 1, 30)
        fechai = new Date(año, mes - 1, 1)
      };
      var j = parseInt(fechai - fechainicio) / (1000 * 3600 * 24)
      console.log(j)
      if (j <= -30) {
        alert("El empleado esta registrado con fecha posterior al registro del rol de pagos, por favor tomar las medidas respectivas")
      }
      else {
        var dias = parseInt(Math.abs(fechaf - fechainicio) / (1000 * 3600 * 24) + 1)
        if (dias > 30) {
          dias = 30
          $("#id_dias").val(dias)
        }
        else {
          $("#id_dias").val(dias)
        }
      }
      recarga(salario, nc, acmXIII, acmXIV, acmFR)
    }
  )
};

function recarga(data, nc, acmXIII, acmXIV, acmFR) {
  var salario = parseFloat(data)

  $("#nombresCompletos").val(nc);
  $("#nombresCompletos").prop("readonly", true);
  $("#SalarioNominal").val(salario.toFixed(2));
  $("#SalarioNominal").prop("readonly", true);
  var dias = parseFloat(document.getElementById("id_dias").value)
  document.getElementById("id_dias").setAttribute("max", 30)
  var salarioMensual = salario / 30 * dias
  $("#SalarioMensual").val(salarioMensual.toFixed(2));
  $("#SalarioMensual").prop("readonly", true);

  var horas25 = document.getElementById("id_horas25").value
  var calc = salarioMensual / 240 * 1.25
  var valor25 = calc * horas25
  $("#id_valor25").val(valor25.toFixed(2));
  $("#id_valor25").prop("readonly", true);

  var horas50 = document.getElementById("id_horas50").value
  var calc = salarioMensual / 240 * 1.5
  var valor50 = calc * horas50
  $("#id_valor50").val(valor50.toFixed(2));
  $("#id_valor50").prop("readonly", true);

  var horas100 = document.getElementById("id_extraHoras100").value
  var calc = salarioMensual / 240 * 2
  var valor100 = calc * horas100
  $("#id_valor100").val(valor100.toFixed(2));
  $("#id_valor100").prop("readonly", true);

  var totalIngresos = salarioMensual + valor25 + valor50 + valor100 + parseFloat(document.getElementById("id_comisiones").value) + parseFloat(document.getElementById("id_bonoAdicional").value)

  $("#total_ingresos").val(totalIngresos.toFixed(2));
  $("#total_ingresos").prop("readonly", true);
  var IESSpersonal = totalIngresos * 0.0945
  $("#id_IESSpersonal").val(IESSpersonal.toFixed(2));
  $("#id_IESSpersonal").prop("readonly", true);
  var IESSpatr = totalIngresos * 0.1215
  $("#id_IESSpatr").val(IESSpatr.toFixed(2));
  $("#id_IESSpatr").prop("readonly", true);
  var totalegresos = IESSpersonal +
    parseFloat(document.getElementById("id_retencionIR").value) +
    parseFloat(document.getElementById("id_prestamoIESS").value) +
    parseFloat(document.getElementById("id_extConyuges").value) +
    parseFloat(document.getElementById("id_otrosDescuentos").value) +
    parseFloat(document.getElementById("id_multas").value) +
    parseFloat(document.getElementById("id_anticipos").value) +
    parseFloat(document.getElementById("id_otrosPrestamos").value)
  $("#total_egresos").val(totalegresos.toFixed(2));
  $("#total_egresos").prop("readonly", true);
  if (acmXIII === "1") {
    var valorXIII = parseFloat(totalIngresos / 12).toFixed(2)

    var pagoXIII = parseFloat(totalIngresos / 12).toFixed(2)
    $("#id_valorXIII").val(valorXIII);
    $("#id_valorXIII").prop("readonly", true);
    $("#id_pagoXIII").val(pagoXIII);
    $("#id_pagoXIII").prop("readonly", true);
  }
  else if (acmXIII == "2") {
    var valorXIII = parseFloat(totalIngresos / 12).toFixed(2)
    var pagoXIII = 0
    $("#id_valorXIII").val(valorXIII);
    $("#id_valorXIII").prop("readonly", true);
    $("#id_pagoXIII").val(pagoXIII);
    $("#id_pagoXIII").prop("readonly", true);
  }
  else if (acmXIII == "3") {
    var valorXIII = parseFloat(totalIngresos / 12).toFixed(2)
    var pagoXIII = 0
    $("#id_valorXIII").val(valorXIII);
    $("#id_valorXIII").prop("readonly", true);
    $("#id_pagoXIII").val(pagoXIII);
    $("#id_pagoXIII").prop("readonly", true);
  };

  if (acmXIV === "1") {
    var valorXIV = parseFloat(425 / 360 * dias).toFixed(2)

    var pagoXIV = parseFloat(425 / 360 * dias).toFixed(2)
    $("#id_valorXIV").val(valorXIV);
    $("#id_valorXIV").prop("readonly", true);
    $("#id_pagoXIV").val(pagoXIV);
    $("#id_pagoXIV").prop("readonly", true);
  }
  else if (acmXIV == "2") {
    var valorXIV = parseFloat(425 / 360 * dias).toFixed(2)
    var pagoXIV = 0
    $("#id_valorXIV").val(valorXIV);
    $("#id_valorXIV").prop("readonly", true);
    $("#id_pagoXIV").val(pagoXIV);
    $("#id_pagoXIV").prop("readonly", true);
  }
  else if (acmXIII == "3") {
    var valorXIV = parseFloat(425 / 360 * dias).toFixed(2)
    var pagoXIV = 0
    $("#id_valorXIV").val(valorXIV);
    $("#id_valorXIV").prop("readonly", true);
    $("#id_pagoXIV").val(pagoXIV);
    $("#id_pagoXIV").prop("readonly", true);
  };

  if (acmFR === "1") {
    var valorFR = parseFloat(totalIngresos * 0.0833).toFixed(2)

    var pagoFR = parseFloat(totalIngresos * 0.0833).toFixed(2)
    $("#id_fondoReserva").val(valorFR);
    $("#id_fondoReserva").prop("readonly", true);
    $("#id_pagoFR").val(pagoFR);
    $("#id_pagoFR").prop("readonly", true);
  }
  else if (acmFR == "2") {
    var valorFR = parseFloat(totalIngresos * 0.0833).toFixed(2)
    var pagoFR = 0
    $("#id_fondoReserva").val(valorFR);
    $("#id_fondoReserva").prop("readonly", true);
    $("#id_pagoFR").val(pagoFR);
    $("#id_pagoFR").prop("readonly", true);
  }
  else if (acmFR == "3") {
    var valorFR = parseFloat(totalIngresos * 0.0833).toFixed(2)
    var pagoFR = 0
    $("#id_fondoReserva").val(valorFR);
    $("#id_fondoReserva").prop("readonly", true);
    $("#id_pagoFR").val(pagoFR);
    $("#id_pagoFR").prop("readonly", true);
  };

  var vacaciones = totalIngresos / 24
  $("#id_vacaciones").val(vacaciones.toFixed(2));
  $("#id_vacaciones").prop("readonly", true);

  a = parseFloat(document.getElementById("id_movilizacion").value)
  b = parseFloat(document.getElementById("id_pagoXIII").value)
  c = parseFloat(document.getElementById("id_pagoXIV").value)
  d = parseFloat(document.getElementById("id_pagoFR").value)
  e = parseFloat(document.getElementById("id_transporte").value)
  f = parseFloat(document.getElementById("id_movilizacion").value)
  var totaloingresos = a + b + c + d + e + f

  $("#total_oIngresos").val(totaloingresos.toFixed(2))
  $("#total_oIngresos").prop("readonly", true);

  var total_pago = totalIngresos + totaloingresos - totalegresos

  $("#total_pago").val(total_pago.toFixed(2));
  $("#total_pago").prop("readonly", true);
  pagoa = parseFloat(document.getElementById("id_valorXIII").value)
  pagob = parseFloat(document.getElementById("id_valorXIV").value)
  pagoc = parseFloat(document.getElementById("id_vacaciones").value)
  pagod = parseFloat(document.getElementById("id_fondoReserva").value)
  pagoe = parseFloat(document.getElementById("id_IESSpatr").value)

  var totalProvisiones = pagoa + pagob + pagoc + pagod + pagoe

  $("#totalProvisiones").val(totalProvisiones.toFixed(2));
  $("#totalProvisiones").prop("readonly", true);
  $("#id_fechaFin").remove("type");
};
// FIN DE FUNCIONES PERSONALIZADAS PARA EJECUTAR PROCESOS




function sortTable(id) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById(id);
  console.log(table)
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("td")[0];
      y = rows[i + 1].getElementsByTagName("td")[0];
      console.log(x, y)
      //check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
};

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }

  return cookieValue;
}

// FUNCION PRINCIPAL DE DATATABLE

function genericDatatable(valor) {
  filtrarinfo();
  var table = $('#Rem').DataTable({
    dom: 'lfBrtip',
    lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "Todo"]],
    responsive: true,
    autoWidth: false,
    destroy: true,
    deferRender: true,
    fixedHeader: {
      header: true,
      footer: true
    },
    ajax: rolesAjax(valor),
    order: [1],
    language: {
      url: "/static/assets/static/js/es-ES.json"
    },
    columns: nominaColumns(valor),
    columnDefs: nominaColumndefs(),
    initComplete: function (settings, json) { },
    drawCallback: function () {
      var api = this.api();
      nominaDrawcallback(api, valor)
    },
    buttons: nominaButtons(valor),
  });
  table.buttons().container()
    .appendTo($('.col-sm-6:eq(0)', table.table().container()));
  $('#m_e, #a_e').change(function () {
    table.draw();
  });
}
//FIN FUNCION DE DATATABLE

// FUNCIONES TRABAJAR CON LOS DATATABLES GENERICAS-------------------------------

function nominaColumndefs() {
  var columndefs = [
    {
      targets: [0],
      render: function (data, type, row) {
        var buttons = ' <a type="button" class="badge bg-pink m-1" href="#" onclick = "eliminaRol(' + row.id + ',' + row.ident + ',' + row.ano + ',' + row.mes + ')"><svg xmlns="http://www.w3.org/2000/svg"' +
          ' class="icon icon-tabler icon-tabler-circle-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"' +
          ' stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">' +
          '<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>' +
          '<circle cx="12" cy="12" r="9"></circle><path d="M10 10l4 4m0 -4l-4 4"></path></svg></a>'
        buttons += '<a type="button" class="badge bg-azure m-1" onclick="editaRol(' + row.id + ')">'
          + '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="24"' +
          ' height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" ' +
          ' stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path>' +
          '<path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>' +
          '<path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>'
        '<path d="M16 5l3 3"></path></svg></a>'
        return buttons;
      }
    },
  ]
  return columndefs
};

function filtrarinfo() {
  $.fn.dataTable.ext.search.push(function (settings, data, dataIndex) {
    var mes = document.getElementById("m_e");
    var mes = mes.options[mes.selectedIndex]
    var mes = mes.value;

    var ano = document.getElementById("a_e");
    var ano = ano.options[ano.selectedIndex]
    var ano = ano.value;
    var ano_e = parseFloat(data[4]) || 0; // use data for the age column
    var mes_e = parseFloat(data[5]) || 0; // use data for the age column

    if (mes == mes_e && ano == ano_e) {
      return true;
    }
    else if (mes == "00" && ano == "0000") {
      return true;
    }
    return false;
  });
}

// AQUI TERMINA FUNCIONES DE DATATABLES GENERICAS-------------------------------

// FUNCIONES COLUMNAS DE  NOMINA DATATABLES------------------------------

function rolesAjax(valor) {
  if (valor == "Nomina") {
    var ajax = {
      url: "/empleados/listarNominas/",
      type: 'get',
      data: "",
      dataSrc: "",
    }
    return ajax
  }
  else if (valor == "Provision") {
    var ajax = {
      url: "/empleados/listarNominas/",
      type: 'get',
      data: "",
      dataSrc: "",
    }
    return ajax
  }
  else if (valor == "Aporte") {
    var ajax = {
      url: "/empleados/listarNominas/",
      type: 'get',
      data: "",
      dataSrc: "",
    }
    return ajax
  }
  else if (valor == "IESS") {
    var ajax = {
      url: "/empleados/listarNominas/",
      type: 'get',
      data: "",
      dataSrc: "",
    }
    return ajax
  }
};

function nominaColumns(valor) {
  if (valor == "Nomina") {
    var columns = [
      { data: "id" },
      { data: "id" },
      { data: "ident" },
      { data: "nC" },
      { data: "ano" },
      { data: "mes" },
      { data: "salarioMensual" },
      { data: "totalIngresos" },
      { data: "totalEgresos" },
      { data: "totalOtrosIngresos" },
      { data: "totalApagar" },
    ]
    return columns
  }
  else if (valor == "Provision") {
    var columns = [
      { data: "id" },
      { data: "id" },
      { data: "ident" },
      { data: "nC" },
      { data: "ano" },
      { data: "mes" },
      { data: "valorXIII" },
      { data: "pagoXIII" },
      { data: "totalXIII" },

      { data: "valorXIV" },
      { data: "pagoXIV" },
      { data: "totalXIV" },

      { data: "valorVac" },
      { data: "pagoVac" },
      { data: "totalVac" },
    ]
    return columns
  }
  else if (valor == "Aporte") {
    var columns = [
      { data: "id" },
      { data: "id" },
      { data: "identIESS" },
      { data: "nC" },
      { data: "ano" },
      { data: "mes" },
      { data: "valorIESSpers" },
      { data: "pagoIESS" },
      { data: "totalIESS" },
      { data: "valorFR" },
      { data: "pagoFR" },
      { data: "totalFR" },
    ]
    return columns
  }
  else if (valor == "IESS") {
    var columns = [
      { data: "id" },
      { data: "id" },
      { data: "identIESS" },
      { data: "nC" },
      { data: "ano" },
      { data: "mes" },
      { data: "totalIngExtra" },
      { data: "valorIESSpers" },
      { data: "pagoIESS" },
      { data: "totalIESS" },

    ]
    return columns
  }



};

function nominaDrawcallback(api, valor) {
  if (valor == "Nomina") {
    var suma6 = api.column(6, { page: 'current' }).data().sum()
    var suma7 = api.column(7, { page: 'current' }).data().sum()
    var suma8 = api.column(8, { page: 'current' }).data().sum()
    var suma9 = api.column(9, { page: 'current' }).data().sum()
    var suma10 = api.column(10, { page: 'current' }).data().sum()

    $(api.column(6).footer()).html(suma6.toFixed(2))
    $(api.column(7).footer()).html(suma7.toFixed(2))
    $(api.column(8).footer()).html(suma8.toFixed(2))
    $(api.column(9).footer()).html(suma9.toFixed(2))
    $(api.column(10).footer()).html(suma10.toFixed(2))
  }
  else if (valor == "Provision") {
    var suma6 = api.column(6, { page: 'current' }).data().sum()
    var suma7 = api.column(7, { page: 'current' }).data().sum()
    var suma8 = api.column(8, { page: 'current' }).data().sum()
    var suma9 = api.column(9, { page: 'current' }).data().sum()
    var suma10 = api.column(10, { page: 'current' }).data().sum()
    var suma11 = api.column(11, { page: 'current' }).data().sum()
    var suma12 = api.column(12, { page: 'current' }).data().sum()
    var suma13 = api.column(13, { page: 'current' }).data().sum()
    var suma14 = api.column(14, { page: 'current' }).data().sum()


    $(api.column(6).footer()).html(suma6.toFixed(2))
    $(api.column(7).footer()).html(suma7.toFixed(2))
    $(api.column(8).footer()).html(suma8.toFixed(2))
    $(api.column(9).footer()).html(suma9.toFixed(2))
    $(api.column(10).footer()).html(suma10.toFixed(2))
    $(api.column(11).footer()).html(suma11.toFixed(2))
    $(api.column(12).footer()).html(suma12.toFixed(2))
    $(api.column(13).footer()).html(suma13.toFixed(2))
    $(api.column(14).footer()).html(suma14.toFixed(2))
  }
  else if (valor == "Aporte") {
    var suma6 = api.column(6, { page: 'current' }).data().sum()
    var suma7 = api.column(7, { page: 'current' }).data().sum()
    var suma8 = api.column(8, { page: 'current' }).data().sum()
    var suma9 = api.column(9, { page: 'current' }).data().sum()
    var suma10 = api.column(10, { page: 'current' }).data().sum()
    var suma11 = api.column(11, { page: 'current' }).data().sum()
    $(api.column(6).footer()).html(suma6.toFixed(2))
    $(api.column(7).footer()).html(suma7.toFixed(2))
    $(api.column(8).footer()).html(suma8.toFixed(2))
    $(api.column(9).footer()).html(suma9.toFixed(2))
    $(api.column(10).footer()).html(suma10.toFixed(2))
    $(api.column(11).footer()).html(suma11.toFixed(2))
  }
  else if (valor == "IESS") {
    var suma6 = api.column(6, { page: 'current' }).data().sum()
    var suma7 = api.column(7, { page: 'current' }).data().sum()
    var suma8 = api.column(8, { page: 'current' }).data().sum()
    var suma9 = api.column(9, { page: 'current' }).data().sum()


    $(api.column(6).footer()).html(suma6.toFixed(2))
    $(api.column(7).footer()).html(suma7.toFixed(2))
    $(api.column(8).footer()).html(suma8.toFixed(2))
    $(api.column(9).footer()).html(suma9.toFixed(2))

  }
}

function nominaButtons(valor) {
  if (valor == "Nomina") {
    var buttons = [{
      extend: 'excelHtml5',
      text: '<svg xmlns="http://www.w3.org/2000/svg" class="icon'
        + ' icon-tabler icon-tabler-file-spreadsheet" width="24" height="24" '
        + 'viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" '
        + 'fill="none" stroke-linecap="round" stroke-linejoin="round"><path'
        + ' stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 '
        + '3v4a1 1 0 0 0 1 1h4"></path><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2'
        + ' 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path><path d="M8 11h8v7h-8z">'
        + '</path><path d="M8 15h8"></path><path d="M11 11v7"></path></svg> Excel',
      className: "btn btn-sm btn-outline-green mb-2",
      exportOptions: {
        columns: [2, 3, 4, 5, 6, 7, 8, 9, 10]
      },
      title: "LISTA DE ROLES EMPLEADOS",
      footer: true
    },
    {
      extend: 'copy',
      text: '<svg xmlns="http://www.w3.org/2000/svg" class="icon'
        + ' icon-tabler icon-tabler-copy" width="24" height="24" viewBox="0'
        + ' 0 24 24" stroke-width="2" stroke="currentColor" fill="none" '
        + 'stroke-linecap="round" stroke-linejoin="round"><path stroke="none"'
        + ' d="M0 0h24v24H0z" fill="none"></path><rect x="8" y="8" width="12"'
        + ' height="12" rx="2"></rect><path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2'
        + ' 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path></svg> Copiar',
      className: "btn btn-sm btn-outline-azure mb-2",
      copySuccess: "Copiado en el Portapapeles",
      exportOptions: {
        columns: [2, 3, 4, 5, 6, 7, 8, 9, 10]
      },
      footer: true
    },
    {
      extend: 'csv',
      text: '<svg xmlns="http://www.w3.org/2000/svg" class="icon'
        + ' icon-tabler icon-tabler-file-spreadsheet" width="24" height="24" '
        + 'viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" '
        + 'fill="none" stroke-linecap="round" stroke-linejoin="round"><path'
        + ' stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 '
        + '3v4a1 1 0 0 0 1 1h4"></path><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2'
        + ' 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path><path d="M8 11h8v7h-8z">'
        + '</path><path d="M8 15h8"></path><path d="M11 11v7"></path></svg> CSV',
      exportOptions: {
        columns: [2, 3, 4, 5, 6, 7, 8, 9, 10]
      },
      className: "btn btn-sm btn-outline-success mb-2 pl-2"

    },

    {

      extend: 'pdf',
      text: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler '
        + ' icon-tabler-file-export" width="24" height="24" viewBox="0 0 24 24"'
        + ' stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"'
        + ' stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path>'
        + ' <path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M11.5 21h-4.5a2 2 0 0 1 -2 -2v-14a2 '
        + '2 0 0 1 2 -2h7l5 5v5m-5 6h7m-3 -3l3 3l-3 3"></path></svg> PDF',
      className: "btn btn-sm btn-outline-pink mb-2",
      orientation: 'landscape',
      pageSize: 'LEGAL',
      exportOptions: {
        columns: [2, 3, 4, 5, 6, 7, 8, 9, 10]
      },
      title: "LISTA DE ROLES EMPLEADOS",
      footer: true
    },

    ]
    return buttons
  }
  else if (valor == "Provision") {

    var buttons = [{
      extend: 'excelHtml5',
      text: '<svg xmlns="http://www.w3.org/2000/svg" class="icon'
        + ' icon-tabler icon-tabler-file-spreadsheet" width="24" height="24" '
        + 'viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" '
        + 'fill="none" stroke-linecap="round" stroke-linejoin="round"><path'
        + ' stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 '
        + '3v4a1 1 0 0 0 1 1h4"></path><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2'
        + ' 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path><path d="M8 11h8v7h-8z">'
        + '</path><path d="M8 15h8"></path><path d="M11 11v7"></path></svg> Excel',
      className: "btn btn-sm btn-outline-green mb-2",
      exportOptions: {
        columns: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
      },
      title: "LISTA DE PROVISIONES EMPLEADOS",
      footer: true
    },
    {
      extend: 'copy',
      text: '<svg xmlns="http://www.w3.org/2000/svg" class="icon'
        + ' icon-tabler icon-tabler-copy" width="24" height="24" viewBox="0'
        + ' 0 24 24" stroke-width="2" stroke="currentColor" fill="none" '
        + 'stroke-linecap="round" stroke-linejoin="round"><path stroke="none"'
        + ' d="M0 0h24v24H0z" fill="none"></path><rect x="8" y="8" width="12"'
        + ' height="12" rx="2"></rect><path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2'
        + ' 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path></svg> Copiar',
      className: "btn btn-sm btn-outline-azure mb-2",
      copySuccess: "Copiado en el Portapapeles",
      exportOptions: {
        columns: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
      },
      footer: true
    },
    {
      extend: 'csv',
      text: '<svg xmlns="http://www.w3.org/2000/svg" class="icon'
        + ' icon-tabler icon-tabler-file-spreadsheet" width="24" height="24" '
        + 'viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" '
        + 'fill="none" stroke-linecap="round" stroke-linejoin="round"><path'
        + ' stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 '
        + '3v4a1 1 0 0 0 1 1h4"></path><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2'
        + ' 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path><path d="M8 11h8v7h-8z">'
        + '</path><path d="M8 15h8"></path><path d="M11 11v7"></path></svg> CSV',
      exportOptions: {
        columns: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
      },
      className: "btn btn-sm btn-outline-success mb-2 pl-2"

    },

    {

      extend: 'pdf',
      text: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler '
        + ' icon-tabler-file-export" width="24" height="24" viewBox="0 0 24 24"'
        + ' stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"'
        + ' stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path>'
        + ' <path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M11.5 21h-4.5a2 2 0 0 1 -2 -2v-14a2 '
        + '2 0 0 1 2 -2h7l5 5v5m-5 6h7m-3 -3l3 3l-3 3"></path></svg> PDF',
      className: "btn btn-sm btn-outline-pink mb-2",
      orientation: 'landscape',
      pageSize: 'LEGAL',
      exportOptions: {
        columns: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
      },
      title: "LISTA DE PROVISIONES EMPLEADOS",
      footer: true
    },

    ]
    return buttons

  }
  else if (valor == "Aporte") {

    var buttons = [{
      extend: 'excelHtml5',
      text: '<svg xmlns="http://www.w3.org/2000/svg" class="icon'
        + ' icon-tabler icon-tabler-file-spreadsheet" width="24" height="24" '
        + 'viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" '
        + 'fill="none" stroke-linecap="round" stroke-linejoin="round"><path'
        + ' stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 '
        + '3v4a1 1 0 0 0 1 1h4"></path><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2'
        + ' 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path><path d="M8 11h8v7h-8z">'
        + '</path><path d="M8 15h8"></path><path d="M11 11v7"></path></svg> XLSX',
      className: "btn btn-sm btn-outline-green mb-2",
      exportOptions: {
        columns: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      },
      title: "LISTA APORTES IESS Y FONDO DE RESERVA",
      footer: true
    },
    {
      extend: 'copy',
      text: '<svg xmlns="http://www.w3.org/2000/svg" class="icon'
        + ' icon-tabler icon-tabler-copy" width="24" height="24" viewBox="0'
        + ' 0 24 24" stroke-width="2" stroke="currentColor" fill="none" '
        + 'stroke-linecap="round" stroke-linejoin="round"><path stroke="none"'
        + ' d="M0 0h24v24H0z" fill="none"></path><rect x="8" y="8" width="12"'
        + ' height="12" rx="2"></rect><path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2'
        + ' 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path></svg> Copiar',
      className: "btn btn-sm btn-outline-azure mb-2",
      copySuccess: "Copiado en el Portapapeles",
      exportOptions: {
        columns: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      },
      footer: true
    },
    {
      extend: 'csv',
      text: '<svg xmlns="http://www.w3.org/2000/svg" class="icon'
        + ' icon-tabler icon-tabler-file-spreadsheet" width="24" height="24" '
        + 'viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" '
        + 'fill="none" stroke-linecap="round" stroke-linejoin="round"><path'
        + ' stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 '
        + '3v4a1 1 0 0 0 1 1h4"></path><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2'
        + ' 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path><path d="M8 11h8v7h-8z">'
        + '</path><path d="M8 15h8"></path><path d="M11 11v7"></path></svg> CSV',
      exportOptions: {
        columns: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      },
      className: "btn btn-sm btn-outline-success mb-2 pl-2"

    },

    {

      extend: 'pdf',
      text: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler '
        + ' icon-tabler-file-export" width="24" height="24" viewBox="0 0 24 24"'
        + ' stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"'
        + ' stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path>'
        + ' <path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M11.5 21h-4.5a2 2 0 0 1 -2 -2v-14a2 '
        + '2 0 0 1 2 -2h7l5 5v5m-5 6h7m-3 -3l3 3l-3 3"></path></svg> PDF',
      className: "btn btn-sm btn-outline-pink mb-2",
      orientation: 'landscape',
      pageSize: 'LEGAL',
      exportOptions: {
        columns: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      },
      title: "LISTA APORTES IESS Y FONDO DE RESERVA",
      footer: true
    },

    ]
    return buttons

  }

  else if (valor == "IESS") {

    var buttons = [{
      extend: 'excelHtml5',
      text: '<svg xmlns="http://www.w3.org/2000/svg" class="icon'
        + ' icon-tabler icon-tabler-file-spreadsheet" width="24" height="24" '
        + 'viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" '
        + 'fill="none" stroke-linecap="round" stroke-linejoin="round"><path'
        + ' stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 '
        + '3v4a1 1 0 0 0 1 1h4"></path><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2'
        + ' 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path><path d="M8 11h8v7h-8z">'
        + '</path><path d="M8 15h8"></path><path d="M11 11v7"></path></svg> XLSX',
      className: "btn btn-sm btn-outline-green mb-2",
      exportOptions: {
        columns: [2, 3, 4, 5, 6, 7, 8,]
      },
      title: "LISTA APORTES IESS Y FONDO DE RESERVA",
      footer: true
    },
    {
      extend: 'copy',
      text: '<svg xmlns="http://www.w3.org/2000/svg" class="icon'
        + ' icon-tabler icon-tabler-copy" width="24" height="24" viewBox="0'
        + ' 0 24 24" stroke-width="2" stroke="currentColor" fill="none" '
        + 'stroke-linecap="round" stroke-linejoin="round"><path stroke="none"'
        + ' d="M0 0h24v24H0z" fill="none"></path><rect x="8" y="8" width="12"'
        + ' height="12" rx="2"></rect><path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2'
        + ' 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path></svg> Copiar',
      className: "btn btn-sm btn-outline-azure mb-2",
      copySuccess: "Copiado en el Portapapeles",
      exportOptions: {
        columns: [2, 3, 4, 5, 6, 7, 8,]
      },
      footer: true
    },
    {
      extend: 'csv',
      text: '<svg xmlns="http://www.w3.org/2000/svg" class="icon'
        + ' icon-tabler icon-tabler-file-spreadsheet" width="24" height="24" '
        + 'viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" '
        + 'fill="none" stroke-linecap="round" stroke-linejoin="round"><path'
        + ' stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 '
        + '3v4a1 1 0 0 0 1 1h4"></path><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2'
        + ' 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path><path d="M8 11h8v7h-8z">'
        + '</path><path d="M8 15h8"></path><path d="M11 11v7"></path></svg> CSV',
      exportOptions: {
        columns: [2, 3, 4, 5, 6, 7, 8,]
      },
      className: "btn btn-sm btn-outline-success mb-2 pl-2"

    },

    {

      extend: 'pdf',
      text: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler '
        + ' icon-tabler-file-export" width="24" height="24" viewBox="0 0 24 24"'
        + ' stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"'
        + ' stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path>'
        + ' <path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M11.5 21h-4.5a2 2 0 0 1 -2 -2v-14a2 '
        + '2 0 0 1 2 -2h7l5 5v5m-5 6h7m-3 -3l3 3l-3 3"></path></svg> PDF',
      className: "btn btn-sm btn-outline-pink mb-2",
      orientation: 'landscape',
      pageSize: 'LEGAL',
      exportOptions: {
        columns: [2, 3, 4, 5, 6, 7, 8,]
      },
      title: "LISTA APORTES IESS Y FONDO DE RESERVA",
      footer: true
    },

    ]
    return buttons

  }
};



// FUNCIONES COLUMNAS DE  NOMINA DATATABLES------------------------------

// funciones personalizadas
function plan(data){
  
  fetch("../planCuentasprocess/", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'X-CSRFToken': getCookie('csrftoken'),
    },
  }).then(function (response) {
    return response.json()
  }).then(
  function (data) {
    valor = data.data[0].cuenta
    
    if (valor == "No existe"){
      $("#id_ctaAcumulacion").val("");
      alert("No existe la Cuenta contable de acumulación, Por Favor revisar el plan de Cuentas")
    }
    else{
      $("#id_ctaAcumulacion").val(valor);
    }
    
});
};
function planp(data){
  
  fetch("../../planCuentasprocess/", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'X-CSRFToken': getCookie('csrftoken'),
    },
  }).then(function (response) {
    return response.json()
  }).then(
  function (data) {
    valor = data.data[0].cuenta
    
    if (valor == "No existe"){
      $("#id_ctaAcumulacion").val("");
      alert("No existe la Cuenta contable de acumulación, Por Favor revisar el plan de Cuentas")
    }
    else{
      $("#id_ctaAcumulacion").val(valor);
    }
    
});
};
