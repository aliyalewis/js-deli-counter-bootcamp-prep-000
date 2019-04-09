var katzDeliLine = []

function takeANumber(line, name) {
line.push(name);
return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine >0) {
    return `Currently serving ${katzDeliLine.shift()}`
  } else (katzDeliLine = 0) {
    return "There is nobody waiting to be served!"
  }
}
