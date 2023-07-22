$(function() {
  $('.output input').val('');
  var mode = 'calc';

  function insert(num) {
    var currentVal = $('.output input').val();
    if (num === '÷') num = '/';
    else if (num === '×') num = '*';
    else if (num === '%') num = '/100';
    $('.output input').val(currentVal + num);
    if (mode == 'equal') {
      $('.output input').val(num);
      mode = 'calc';
    }
  }

  function clr() {
    $('.output input').val('');
  }

  function del() {
    $('.output input').val($('.output input').val().slice(0, -1));
    if (mode == 'equal') {
      $('.output input').val('');
    }
  }

  function calc() {
    try {
      $('.output input').val(eval($('.output input').val()));
      mode = 'equal';
    } catch (err) {
      $('.output input').val('INVALID');
      mode = 'equal';
    }
  }

  $('#clearBtn').click(function() {
    clr();
  });

  $('#deleteBtn').click(function() {
    del();
  });

  $('#percentBtn').click(function() {
    insert('%');
  });

  $('#divideBtn').click(function() {
    insert('÷');
  });

  $('#sevenBtn').click(function() {
    insert('7');
  });

  $('#eightBtn').click(function() {
    insert('8');
  });

  $('#nineBtn').click(function() {
    insert('9');
  });

  $('#multiplyBtn').click(function() {
    insert('×');
  });

  $('#fourBtn').click(function() {
    insert('4');
  });

  $('#fiveBtn').click(function() {
    insert('5');
  });

  $('#sixBtn').click(function() {
    insert('6');
  });

  $('#subtractBtn').click(function() {
    insert('-');
  });

  $('#oneBtn').click(function() {
    insert('1');
  });

  $('#twoBtn').click(function() {
    insert('2');
  });

  $('#threeBtn').click(function() {
    insert('3');
  });

  $('#addBtn').click(function() {
    insert('+');
  });

  $('#zeroBtn').click(function() {
    insert('0');
  });

  $('#decimalBtn').click(function() {
    insert('.');
  });

  $('#equalBtn').click(function() {
    calc();
  });

  $('.icon').click(function() {
    $('.menu').toggleClass('open');
  });

  $('.blue').click(function() {
    $('body').removeClass('orange red purple pink').addClass('blue');
    $('.menu').removeClass('open');
  });

  $('.orange').click(function() {
    $('body').removeClass('blue red purple pink').addClass('orange');
    $('.menu').removeClass('open');
  });

  $('.red').click(function() {
    $('body').removeClass('orange blue purple pink').addClass('red');
    $('.menu').removeClass('open');
  });
    
  $('.purple').click(function() {
    $('body').removeClass('orange red blue pink').addClass('purple');
    $('.menu').removeClass('open');
  });
    
  $('.pink').click(function() {
    $('body').removeClass('orange blue purple red').addClass('pink');
    $('.menu').removeClass('open');
  });
});
