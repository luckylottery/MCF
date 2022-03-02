import "./MyMCFcoin.sol";
pragma solidity ^0.8.4;
// SPDX-License-Identifier: Unlicensed


abstract contract ReentrancyGuard {

    uint256 private constant _NOT_ENTERED = 1;
    uint256 private constant _ENTERED = 2;

    uint256 private _status;

    constructor() {
        _status = _NOT_ENTERED;
    }


    modifier nonReentrant() {
        // On the first call to nonReentrant, _notEntered will be true
        require(_status != _ENTERED, "ReentrancyGuard: reentrant call");

        // Any calls to nonReentrant after this point will fail
        _status = _ENTERED;

        _;

        // By storing the original value once again, a refund is triggered (see
        // https://eips.ethereum.org/EIPS/eip-2200)
        _status = _NOT_ENTERED;
    }
}




contract mainFactory is Ownable, ReentrancyGuard{
    address payable feesAddress;
    function deployNewInstance(string memory _NAME, string memory _SYMBOL, uint256 _DECIMALS,
     uint256 _supply, uint256 _txFee,uint256 _lpFee,uint256 _DexFee,
     address routerAddress,address feeaddress,
     address tokenOwner) public payable{
        myMCFcoin newInstance = new myMCFcoin(_NAME,_SYMBOL,_DECIMALS,_supply,_txFee,_lpFee,_DexFee,routerAddress,feeaddress,tokenOwner);

    }

    function withdrawFees() public onlyOwner{
        uint256 currentContractBalance = address(this).balance;
        feesAddress.transfer(currentContractBalance);

    }
    function updateFeeAddress(address payable newAddress) public onlyOwner{
        feesAddress=newAddress;
    }
  


}