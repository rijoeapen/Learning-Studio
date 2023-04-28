export const InputWrapper = ({
  label,
  type,
  id,
  name,
  handleChange,
  errorFields,
  value,
}) => {
  return (
    <div className="form-column">
      <label htmlFor={id}>
        {label}
        <span className="error" style={{ marginLeft: ".3rem" }}>
          *
        </span>
      </label>
      <TextInput type={type} id={id} name={name} handleChange={handleChange} />
      {errorFields[name] && <p className="error">{label} is required</p>}
    </div>
  );
};

export const CheckboxType = ({
  type,
  header,
  name,
  handleChange,
  box,
  label,
  errorFields,
  errorHead,
}) => {
  return (
    <div className="form-column">
      <label htmlFor="">
        {header}
        <span className="error" style={{ marginLeft: ".3rem" }}>
          *
        </span>
      </label>
      <div className="group">
        {box.map((course, index) => {
          return (
            <div className="group" style={{ marginLeft: 0 }} key={index}>
              <TextInput
                type={type}
                id={course}
                name={name}
                handleChange={handleChange}
                value={course}
                key={index}
              />
              <label htmlFor={course}>{label[index]}</label>
            </div>
          );
        })}
      </div>
      {errorFields[name] && <p className="error">{errorHead} is required</p>}
    </div>
  );
};

export const SelectWrapper = ({
  id,
  handleChange,
  errorFields,
  header,
  options,
  value,
}) => {
  return (
    <div className="form-column">
      <label htmlFor={id}>
        {header}
        <span className="error" style={{ marginLeft: ".3rem" }}>
          *
        </span>
      </label>
      <SelectInput
        id={id}
        handleChange={handleChange}
        options={options}
        value={value}
      />
      {errorFields[id] && <p className="error">{header} is required</p>}
    </div>
  );
};

const TextInput = ({ type, id, name, handleChange, value }) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      onChange={handleChange}
      onBlur={handleChange}
      value={value}
    />
  );
};

const SelectInput = ({ id, handleChange, options, value }) => {
  return (
    <select id={id} name={id} onChange={handleChange} onBlur={handleChange}>
      {options.map((option, index) => {
        return (
          <option key={index} value={value[index]}>
            {option}
          </option>
        );
      })}
    </select>
  );
};
