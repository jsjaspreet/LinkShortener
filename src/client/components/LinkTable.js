import React, { Component } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';


const renderUrlDataRow = ({ url, token, clicks }) => {
  return (
    <TableRow key={token}>
      <TableRowColumn>{url}</TableRowColumn>
      <TableRowColumn>{token}</TableRowColumn>
      <TableRowColumn>{clicks}</TableRowColumn>
    </TableRow>
  )
}

const renderTableRows = (urlData) => urlData.map((urlDataRow) => renderUrlDataRow(urlDataRow))


class LinkTable extends Component {
  render() {
    return (
      <Paper zDepth={2}
             style={{
               marginLeft: 'auto',
               marginRight: 'auto',
               width: '80%'
             }}>
        <Table >
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>Link</TableHeaderColumn>
              <TableHeaderColumn>Token</TableHeaderColumn>
              <TableHeaderColumn>Clicks</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {renderTableRows(this.props.urlData)}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

function mapStateToProps({ urlData }) {
  return { urlData }
}

export default connect(mapStateToProps)(LinkTable)
