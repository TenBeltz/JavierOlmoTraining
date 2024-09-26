import Select from 'react-select';

function MultiSelect({options}) {
  return (
    <div className='text-black'>
      <Select
        options={options}
      />
    </div>
  )
}

export default MultiSelect