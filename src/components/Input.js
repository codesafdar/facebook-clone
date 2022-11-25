const InputComp = ({ handleChange, inputType, inputName, value, placeholder }) => {
  return (
    <>
      <input
        type={inputType}
        name={inputName}
        value={value}
        onChange={handleChange}
        required
        placeholder={placeholder}
        className="w-full block py-3 px-3 focus:border-inherit focus:outline-none border-2 rounded font-light text-lg placeholder-slate-500" />
    </>
  )
}

export default InputComp