function end(str, target) {
  if (str.substr(str.length-target.length) === target )
  return true;
  else return false;
}

end("Bastian", "n", "");
