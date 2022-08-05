import React,{useState} from 'react'
import './AdminStocksView.css';
import StockView from '../AdminComponents/AdminPopups/AdminStocksUpdatePopup';

function AdminStocksView() {

    const [showPopup, setShowPopup] = useState(false);

    return (
        <>

            <div className='AdminStocksView-main'>
                <table className='AdminStocksView-table'>
                    <tr>
                        <th className='AdminStocksView-th'>Drug ID</th>
                        <th className='AdminStocksView-th'>Drug Code</th>
                        <th className='AdminStocksView-th'>Drug Name</th>
                        <th className='AdminStocksView-th'>Price - Per Dozen</th>
                        <th className='AdminStocksView-th'>Quantity</th>
                        <th className='AdminStocksView-th'>Action</th>
                    </tr>

                    <tr>
                        <td className='AdminStocksView-td'>12312312</td>
                        <td className='AdminStocksView-td'>D15-34-2343</td>
                        <td className='AdminStocksView-td'>Panadol</td>
                        <td className='AdminStocksView-td'>20</td>
                        <td className='AdminStocksView-td'>12</td>
                        <td className='AdminStocksView-td'>
                        <button onClick={() => setShowPopup(true)} className='AdminStocksView-button'>Update</button>
                        &nbsp;
                        <StockView trigger={showPopup} setTrigger={setShowPopup}>
                                <h2 className='AdminStocksView-h2'>Update Drug</h2>
                                <hr></hr>
                                <br></br>
                                <input className='adminstocksview-input' placeholder='Drug-ID'/>
                                <br></br>
                                <br></br>
                                <input className='adminstocksview-input' placeholder='Drug-Code'/>
                                <br></br>
                                <br></br>
                                <input className='adminstocksview-input' placeholder='Drug-Name'/>
                                <br></br>
                                <br></br>
                                <input className='adminstocksview-input' placeholder='Price-Per Dozen'/>
                                <br></br>
                                <br></br>
                                <input className='adminstocksview-input' placeholder='Quantity'/>
                                <br></br>
                                <br></br>
                                <button className='AdminStocksView-button'>Update</button>
                            </StockView>
                        <button className='AdminStocksView-button'>Delete</button>
                        </td>
                    </tr>
                </table>
            </div>

        </>
    )
}

export default AdminStocksView
