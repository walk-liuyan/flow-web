import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from 'components/Button'

import classes from './dialog.scss'

export default class Branch extends Component {
  static propTypes = {
    branch: PropTypes.string.isRequired,
    onBuild: PropTypes.func,
  }

  handleClick = () => {
    const { onBuild, branch } = this.props
    return onBuild && onBuild(branch)
  }

  render () {
    const { branch } = this.props
    return <li>
      <div className={classes.item}>
        <span>{branch}</span>
        <Button className={`btn-success ${classes.build}`}
          size='sm' onClick={this.handleClick}>
          构建
        </Button>
      </div>
    </li>
  }
}
