import React from 'react';

const QuationTable = () => {
  return (
    <>
      <table class="table table-bordered " style={{ marginLeft: "157px", width: "88%" }}>
        <thead>
          <tr>
            <th scope="col" colspan="7">QUATATIONS</th>


          </tr>
          <tr>
            <th scope="col">Sl.no</th>
            <th scope="col">University Name</th>
            <th scope="col">No. of Std</th>
            <th scope="col">No. of T</th>
            <th scope="col">No. of EM</th>
            <th scope="col">Contact details</th>
            <th scope="col">Verify</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Bput</td>
            <td>500</td>
            <td>600</td>
            <td>50</td>
            <td>digbijaya.biswal1234@gmail.com</td>
            <td><input type="checkbox" /></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Bput</td>
            <td>500</td>
            <td>600</td>
            <td>50</td>
            <td>digbijaya.biswal1234@gmail.com</td>
            <td><input type="checkbox" /></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Bput</td>
            <td>500</td>
            <td>600</td>
            <td>50</td>
            <td>digbijaya.biswal1234@gmail.com</td>
            <td><input type="checkbox" /></td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Bput</td>
            <td>500</td>
            <td>600</td>
            <td>50</td>
            <td>digbijaya.biswal1234@gmail.com</td>
            <td><input type="checkbox" /></td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Bput</td>
            <td>500</td>
            <td>600</td>
            <td>50</td>
            <td>digbijaya.biswal1234@gmail.com</td>
            <td><input type="checkbox" /></td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Bput</td>
            <td>500</td>
            <td>600</td>
            <td>50</td>
            <td>digbijaya.biswal1234@gmail.com</td>
            <td><input type="checkbox" /></td>
          </tr>
        </tbody>
        <button className="btn btn-primary" style={{textAlign:"center"}} type="Submit">Submit</button>
      </table>

      
    </>
  )
}

export default QuationTable;