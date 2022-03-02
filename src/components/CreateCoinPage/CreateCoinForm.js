import { useState } from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import Switch from "react-switch";
import '../../css/antdOverwrite.css'

export const CreateCoinForm = ({ selectedCrypto }) => {
  const [form] = Form.useForm();
  const [advancedSettings, setAdvancedSettings] = useState(false)
  const onFinish = (values) => {
    const formValues = { ...values, selectedCrypto }
    console.log(formValues)
  };
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item name="tokenName"
        label={<label className="font-bold">Token Name</label>}
        className="grid grid-cols-1 sm:grid-cols-formItem p-4 text-blue-2"
        rules={[{
          required: true,
          message: <label className="text-xs text-red-700">Please input a token name</label>
        }, {
          whitespace: true, message: <label className="text-xs text-red-700">Please input your
            symbol</label>
        }]}>
        <Input
          className="w-full col-start-2 col-end-5 p-0.5 rounded focus:outline-none" />
      </Form.Item>
      <Form.Item name="Symbol"
        label={<label className="font-bold">Symbol</label>}
        className="grid grid-cols-1 sm:grid-cols-formItem p-4 text-blue-2"
        rules={[{
          required: true,
          message: <label className="text-xs text-red-700">Please input your symbol</label>
        }, {
          whitespace: true, message: <label className="text-xs text-red-700">Please input your
            symbol</label>
        }]}>
        <Input className="w-full p-0.5 rounded focus:outline-none" />
      </Form.Item>
      <Form.Item
        name="initialSupply"
        label={<label className="font-bold">Initial
          Supply</label>}
        className="grid grid-cols-1 sm:grid-cols-formItem p-4 text-blue-2"
        rules={[{
          required: true,
          message: <label className="text-xs text-red-700">Please input your initial supply</label>
        }, {
          whitespace: true, message: <label className="text-xs text-red-700">Please input your
            symbol</label>
        }]}>
        <Input className="w-full p-0.5 rounded focus:outline-none" step="1" type={"text"} />
      </Form.Item>

      <Form.Item name="decimals"
        label={<label className="font-bold">Decimals <span
          className="text-xs whitespace-nowrap">(1-18)</span></label>}
        className="grid grid-cols-1 sm:grid-cols-formItem p-4 break-words text-blue-2"
        rules={[{
          required: true,
          message: <label className="text-xs text-red-700">Please input your decimal</label>,
        }, {
          validator: (rule, value, cb) => {
            value > 18 || value < 1 ? cb(`value must be between 1 and 18 ${typeof value}`) : cb(typeof value);
          },
          message: <label className="text-xs text-red-700">Value should be more than 1 and less than
            18</label>,
        }]}
      >
        <Input className="w-full p-0.5 rounded focus:outline-none" step="1" type={"number"} />
      </Form.Item>
      <Form.Item name="advancedSettings" label={<label className="font-bold">Advanced Settings</label>}
        className="px-4 text-blue-2" initialValue={advancedSettings}
        getValueFromEvent={(data) => data}>
        <Switch checked={advancedSettings} className="mt-4" handleDiameter={20} uncheckedIcon={null} checkedIcon={null} onColor="#7280bc" offColor="#e4e9ff"
          offHandleColor='#405cd0' onHandleColor='#e4e9ff' onChange={() => {
            setAdvancedSettings(!advancedSettings)
          }} />
      </Form.Item>
      {advancedSettings ?
        <Form.Item name="createOwner" rules={[{
          whitespace: true, message: <label className="text-xs text-red-700">Please input your
            owner</label>
        }]} label={<label className="font-bold text-blue-2">Create Owner</label>}
          className="grid grid-cols-1 sm:grid-cols-formItem p-4">
          <Input type="text"
            className="w-full p-0.5 rounded focus:outline-none" />
        </Form.Item> : null}

      <Form.Item name="otherConfig" label={<label className="font-bold">Other Config</label>}
        className="p-4 text-blue-2">

        <Checkbox.Group style={{ width: '100%' }} className="grid grid-cols-2">
          <Checkbox value="canBurn" className="whitespace-nowrap p-2"><span
            className="ml-4">Can Burn</span></Checkbox>
          <Checkbox value="canMint" className="whitespace-nowrap p-2"><span
            className="ml-4">Can Mint</span></Checkbox>
          <Checkbox value="canPause" className="whitespace-nowrap p-2"><span className="ml-4">Can Pause</span></Checkbox>
          <Checkbox value="blacklist" className="whitespace-nowrap p-2"><span
            className="ml-4">Blacklist</span></Checkbox>
          <Checkbox value="deflation" className="whitespace-nowrap p-2"><span
            className="ml-4">Deflation</span></Checkbox>
        </Checkbox.Group>
      </Form.Item>
      <Form.Item className="pb-4 pl-4">
        <Button type="primary" htmlType="submit"
          className="font-bold text-red bg-red-secondary border-2 border-red-primary duration-300 rounded p-2"
          style={{
            borderBottom: "4px solid #ec2028",
            borderRadius: "15px",
          }}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}