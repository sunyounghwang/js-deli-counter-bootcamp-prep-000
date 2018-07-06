var deliLine = [];

function takeANumber(deliLine, newName) {
  deliLine.push(newName);
  return `Welcome, ${newName}. You are number ${deliLine.length} in line.`;
}

function nowServing(deliLine) {
  if (deliLine.length > 0) {
    return `Currently serving ${deliLine.shift()}.`;
  } else {
    return 'There is nobody waiting to be served!';
  }
}

