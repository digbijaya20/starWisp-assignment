import React from "react";
import "./style.css";


const Revenue = () => {
    return (
        <>
            <div style={{ marginLeft: "158px", contentAlign: "center", itemsAlign: "center", }}>
                
                <div class="container">
                    <form action="">
                        <div class="row">
                            <div class="col-25">
                                <label for="form">Revenue Form :</label>
                            </div>
                            <div class="col-75">
                                <select id="uvity-clg" >
                                    <option value="default">University/College</option>
                                    <option value="clg">XYZ</option>
                                    <option value="univty">ZZZ</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-25">
                                <label for="tId">Transaction Id :</label>
                            </div>
                            <div class="col-75">
                                <input type="text" id="tId" name="tId" placeholder="Trasaction id.." />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-25">
                                <label for="pMode">Payment Mode :</label>
                            </div>
                            <div class="col-75">
                                <input type="text" id="pMode" name="pMode" placeholder="Your Payment Mode.." />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-25">
                                <label for="Amt">Amount :</label>
                            </div>
                            <div class="col-75">
                                <input type="text" id="Amt" name="Amt" placeholder="Your Pay Mode.." />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-25">
                                <label for="prd">Period :</label>
                            </div>
                            <div class="col-75">
                                <input type="text" id="prd" name="prd" placeholder="Your Period.." />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-25">
                                <label for="lname">Payee Name :</label>
                            </div>
                            <div class="col-75">
                                <input type="text" id="pname" name="lpname" placeholder="Payee By.." />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-25">
                                <label for="pDate">Payment Date :</label>
                            </div>
                            <div class="col-75">
                                <input type="text" id="pDate" name="lpDate" placeholder="Date of Payment.." />
                            </div>
                        </div>


                        <div class="row">
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Revenue;