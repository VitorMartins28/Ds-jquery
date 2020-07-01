$(document).ready(function() {
    $('#form-conju').hide()

    $('#casado').click(function(evento) {
        $('#form-conju').toggle('slow')
        evento.preventDefault();

    })
    $('span').hide()

    $('#nome').focusin(function() {
        $('#valida-nome').fadeIn('slow')

    })

    $('#nasc').focusin(function() {
        $('#valida-data').fadeIn('slow')

    })

    $('#nome').focusout(function() {
        if ($(this).val() == '') {
            $('#valida-nome').addClass('text-danger').removeClass('text-info')
            $('#valida-nome').empty()
            $('#valida-nome').append('Por Favor, digite um nome válido.')
            $(this).focus()
        } else {
            $('#valida-nome').fadeOut(2000)
        }
    })
    $('#nasc').focusout(function() {
        if ($(this).val() == '') {
            $('#valida-data').addClass('text-danger').removeClass('text-info')
            $('#valida-data').empty()
            $('#valida-data').append('Por Favor, digite uma data válido.')
            $(this).focus()
        } else {
            $('#valida-data').fadeOut(2000)
        }
    })

    $('#tel').mask('(99) 9999-9999')
    $('#cel').mask('(99) 99999-9999')
    $('#cep').mask('99999-999')
    $('#nasc').mask('99/99/9999')


    $('.btn-depende').click(function(e) {
        e.preventDefault()

        let qtde = $('#qtde').val()

        for (var i = 0; i < qtde; i++) {
            $('#dep').after(`
        <div class="form-group">
        <label for="">Nome do Dependente</label>
        <input type="text" name="" id="" class="form-control">
        </div>
        `)
        }
        $('#dep').fadeOut(2000)
    })



})