import React, { Component } from 'react';
import ProductService from './ProductService';


class TableRow extends Component {

    constructor(props) {
        super(props);
        this.addProductService = new ProductService();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.addProductService.deleteData(this.props.obj._id);
    }


    render() {
        return (
            <tr>
                <td>
                    {this.props.obj._id}
                </td>
                <td>
                    {this.props.obj.title}
                </td>
                <td>
                    {this.props.obj.description}
                </td>
                <td>
                    <span className="tag is-primary is-medium">{this.props.obj.price}</span>
                </td>
                <td>
                    <button className="button is-warning">Edit</button>
                </td>
                <td>
                    <form onSubmit={this.handleSubmit}>
                        <input type="submit" value="Delete" className="button is-danger"/>
                    </form>
                </td>
            </tr>
        );
    }
}

export default TableRow;