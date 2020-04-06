const removeEmpty = (identificacionRiesgo) => {
  Object.keys(identificacionRiesgo).map(key =>
    (identificacionRiesgo[key] && typeof identificacionRiesgo[key] === 'object') && removeEmpty(identificacionRiesgo[key]) ||
    (identificacionRiesgo[key] === '' || identificacionRiesgo[key] === null) && delete identificacionRiesgo[key]
  );
  return identificacionRiesgo;
};

module.exports = removeEmpty;