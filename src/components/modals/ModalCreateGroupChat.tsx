import React from 'react'

const ModalCreateGroupChat = () => {
  return (
    <Modal
      title="Tạo nhóm"
      visible={open}
     
      okText="Tạo nhóm"
    >
      <div>
        <Row>
          <Col span={2}>
          
          <Avatar
            style={{
              height: 30,
              width: 30,
              marginLeft: 5,
              backgroundColor: "gray",
              border: "none",
            }}
            // src={?.avatar}
          />
         
          </Col>
          <Col span={22}>
            <Input   placeholder="Nhập tên nhóm"></Input>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Input.Search
            
              placeholder="Nhập số điện thoại"
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                marginTop: 10,
                borderRadius: 20,
              }}
            
            
              allowClear
             
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
           
              <List
                style={{
                  marginLeft: 0,
                }}
                itemLayout="horizontal"
                )}
              />
          
          </Col>
        </Row>
      </div>
    </Modal>
  );
};


export default ModalCreateGroupChat