import React, { Component } from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';

class Square extends Component {
  render() {
    return (
      <Button type="dashed" className="square">
      </Button>
    );
  }
}

export default Square;
