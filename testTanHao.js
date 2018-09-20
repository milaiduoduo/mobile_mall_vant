function trueOrFalseIf(toTest) {
  if (toTest) {
    return true;
  } else {
    return false;
  }
}

function trueOrFalseDouble(toTest) {
  return !!toTest;
}

function trueOrFalseBoolean(toTest) {
  return new Boolean(toTest);
}

function print(toTest) {
  console.log(trueOrFalseIf(toTest) + "," + trueOrFalseDouble(toTest) + "," + trueOrFalseBoolean(toTest) + ";");
}

function test() {
  var toTestArray = [undefined, null, "", -0, 0, NaN, false

    , true, "0", 1, Infinity, "true", "false", [], {},
    function () {}
  ];

  for (var i = 0; i < toTestArray.length; i++) {

    print(toTestArray[i]);

  }
}
test();
