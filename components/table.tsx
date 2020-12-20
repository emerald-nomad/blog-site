const Table: React.FC = ({children}) => {
  return   (
    <table className="table table-striped table-dark" style={{marginTop: "2em", marginBottom: "2em"}}>
      <thead>
        <tr>
          {children[0].props.children[0].props.children.map(header => (
            <th key={header.key} scope="col">
              {header.props.children[0].props.value}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {children[1].props.children.map(row => (
          <tr key={row.key}>
            {row.props.children.map((item, index) => {
              const value = item.props.children[0].props.value;
              if (index === 0) {
                return (
                  <th key={item.key} scope="row">
                    {value}
                  </th>
                );
              } else {
                return <td key={item.key}>{value}</td>;
              }
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;