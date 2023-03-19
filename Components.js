import React, { Component } from 'react';
class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{ id: 1, name: 'John', department: 'Marketing', degree: 'MBA', doj: '01-01-2015' },
      { id: 2, name: 'Jane', department: 'Finance', degree: 'CA', doj: '01-02-2015' },
      { id: 3, name: 'Bob', department: 'Sales', degree: 'B.Tech', doj: '01-03-2015' },
      { id: 4, name: 'Alice', department: 'Marketing', degree: 'MBA', doj: '01-04-2015' },
      { id: 5, name: 'Mike', department: 'HR', degree: 'MBA', doj: '01-05-2015' }],
      newItem: {
        id: '',
        name: '',
        department: '',
        degree: '',
        doj: '',
      },
      searchInput: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  handleAddItem = (event) => {
    const { items, newItem } = this.state;
    newItem.id = items.length + 1;
    this.setState({ items: [...items, newItem], newItem: { id: '', name: '', department: '', degree: '', doj: '' } });
  };

  render() {
    const { items, newItem, searchInput } = this.state;
    const filteredItems = items.filter(
      (item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.department.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.degree.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
      <div>
        <h2>Add Item</h2>
        <form onSubmit={this.handleAddItem}>
          <label>
            ID:
            <input type="text" value={newItem.id} onChange={(e) => this.setState({ newItem: { ...newItem, id: e.target.value } })} />
          </label>
          <label>
            Name:
            <input type="text" value={newItem.name} onChange={(e) => this.setState({ newItem: { ...newItem, name: e.target.value } })} />
          </label>
          <label>
            Department:
            <input type="text" value={newItem.department} onChange={(e) => this.setState({ newItem: { ...newItem, department: e.target.value } })} />
          </label>
          <label>
            Degree:
            <input type="text" value={newItem.degree} onChange={(e) => this.setState({ newItem: { ...newItem, degree: e.target.value } })} />
          </label>
          <label>
            DOJ:
            <input type="text" value={newItem.doj} onChange={(e) => this.setState({ newItem: { ...newItem, doj: e.target.value } })} />
          </label>
          <button type="submit">Add Item</button>
        </form>

        <h2>Table</h2>
        <input type="text" placeholder="Search by name, department or degree" value={searchInput} onChange={this.handleInputChange} />

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Degree</th>
              <th>DOJ</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.department}</td>
                <td>{item.degree}</td>
                <td>{item.doj}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="5">{`${filteredItems.length} of ${items.length}`}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default Table;
