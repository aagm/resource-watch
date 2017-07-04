import React from 'react';
import Layout from 'components/admin/layout/Layout';
import DatasetTable from 'components/admin/dataset/table/DatasetTable';
import ButtonContainer from 'components/ui/ButtonContainer';
import Title from 'components/ui/Title';

export default class DatasetIndex extends React.Component {

  render() {
    return (
      <Layout
        title="Datasets"
        description="Dataset description..."
      >
        <div className="row">
          <div className="column small-12">
            <Title className="-huge -p-primary">
              Datasets
            </Title>
            <ButtonContainer
              className="-j-end"
              buttons={[{
                label: 'New +',
                path: '/admin/datasets/new',
                className: ''
              }]}
            />
            <DatasetTable
              application={['rw']}
              authorization={process.env.TEMP_TOKEN}
            />
          </div>
        </div>
      </Layout>
    );
  }
}