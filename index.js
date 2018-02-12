var $ = function (id) {
  return document.getElementById(id);
}
window.onload = function () {

  // page1
  var page = $('page'),
        flag = $('flag'),
        line = $('line'),
        random = $('random'),
        answer = $('answer'),
        show_answer = $('show_answer'),
        len = data.length;

  var set_answer = function (data, l) {
    var create_div = function (index, text, color) {
      var div = document.createElement('div');
      div.innerHTML = '<span style="display:inline-block;width:30px">' + (index + 1) + '. </span><div style="display:inline-block;width:370px">' + text + '</div>';
      div.style.width = '400px';
      div.style.margin = '0 auto';
      if (color) {
        div.style.color = 'green';
      }
      return div;
    };
    show_answer.innerHTML = '';
    data.forEach(function (text, index) {
      var color = false;
      if (index === l) {
        color = true;
      }
      show_answer.appendChild(create_div(index, text, color));
    });
  };

  var random_question = function () {
    show_answer.style.visibility = 'hidden';

    var p = Math.floor(Math.random() * len);
    var f = Math.random() >= 0.5 ? '正' : '倒';
    var p_len = data[p].length;
    var l = Math.floor(Math.random() * p_len);

    page.innerText = 2 * (p + 1) + 1;
    flag.innerText = f;
    line.innerText = f === '倒' ? (p_len - l) : (l + 1);

    set_answer(data[p], l);
  };

  random.addEventListener('click', function () {
    random_question();
  });

  answer.addEventListener('click', function() {
    show_answer.style.visibility = 'visible';
  });

  random_question();

  // page2
  var question2 = $('question2'),
        random2 = $('random2'),
        answer2 = $('answer2'),
        page_2 = $('page_2'),
        line2 = $('line2');
  var random_question2 = function () {
    show_answer2.style.visibility = 'hidden';
    var p = Math.floor(Math.random() * len);
    var p_len = data[p].length;
    var l = Math.floor(Math.random() * p_len);

    question2.innerText = data[p][l];
    page_2.innerText = 2 * (p + 1) + 1;
    line2.innerText = l + 1;
  }

  random2.addEventListener('click', function () {
    random_question2();
  });

  answer2.addEventListener('click', function () {
    show_answer2.style.visibility = 'visible';
  });

  random_question2();

  // page3
  var pi_dom = $('pi'),
        random3 = $('random3'),
        answer3 = $('answer3'),
        show_answer3 = $('show_answer3');

  var random_question3 = function () {
    show_answer3.style.visibility = 'hidden';
    var r = Math.floor(Math.random() * 1000);

    pi_dom.innerText = r + 1;
    show_answer3.innerText = pi[r];
  }

  random3.addEventListener('click', function () {
    random_question3();
  });

  answer3.addEventListener('click', function () {
    show_answer3.style.visibility = 'visible';
  });

  random_question3();

  // page4
  var show_answer4 = $('show_answer4');
  var random_name = function () {
    return chinese[Math.floor(Math.random() * chinese.length)];
  };
  var random_number = function () {
    return Math.floor(Math.random() * 10);
  };
  var random_tag = function () {
    return tag[Math.floor(Math.random() * 32)];
  }
  var random_char = function () {
    return char[Math.floor(Math.random() * 26)];
  }
  $('name').addEventListener('click', function () {
    var text = '';
    for (var i = 0; i < 25; i++) {
      text += '<div>' + random_name() + '</div>';
    }
    show_answer4.innerHTML = text;
  });

  $('char').addEventListener('click', function () {
    var text = '';
    for (var i = 0; i < 40; i++) {
      text += '<div class="num">' + random_char() + '</div>';
    }
    show_answer4.innerHTML = text;
  });

  $('num').addEventListener('click', function () {
    var text = '';
    for (var i = 0; i < 60; i++) {
      text += '<div class="num">' + random_number() + '</div>';
    }
    show_answer4.innerHTML = text;
  });

  $('all').addEventListener('click', function () {
    var text = '', r;
    for (var i = 0; i < 25; i++) {
      r = Math.random();
      if (r < 0.25) {
        text += '<div>' + random_tag() + '</div>';
      } else if (r >= 0.25 && r < 0.5) {
        text += '<div>' + random_char() + '</div>';
      } else if (r >= 0.5 && r < 0.75) {
        text += '<div>' + random_number() + '</div>';
      } else if (r >= 0.75 && r < 0.875) {
        text += '<div>' + random_name()[0] + '</div>';
      } else {
        text += '<div>' + random_name()[1] + '</div>';
      }
    }
    show_answer4.innerHTML = text;
  });

  // 页面tab

  for (var i = 0; i < 4; i++) {
    (function (i) {
      $('page'+(i+1)).addEventListener('click', function () {
        for (var j = 0; j < 4; j++) {
          $('page'+(j+1)+'_').style.display = (i === j) ? 'block' : 'none';
        }
      });
    })(i);
  }


}
