const multipliers = {
  perception: 100,
};

export function skillAdjustment(skill) {
  return multipliers[skill] / 100;
}

export function didHappen(probability, skill = 'perception') {
  const success = probability * skillAdjustment(skill);
  return Math.ceil(Math.random() * 100) <= success;
}
