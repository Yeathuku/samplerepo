import { useEffect, useState } from "react";
import { Tableflow } from "../service/Axios";
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';

const EmployeeTable = () => {
    const [employee, setEmployee] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        Tableflow()
            .then((response) => {
                setEmployee(response.data);
            })
            .catch((error) => {
                setError(error.message);
            });
    }, []);

    const updateEmployee = (id) => {
        navigate(`/useform/${id}`);
    };

    const removeEmployee = (id) => {
        console.log("jkjj");
    };

    const exportPDF = () => {
        const input = document.getElementById('employee-table');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4');
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = pdf.internal.pageSize.getHeight();
                const imgWidth = canvas.width;
                const imgHeight = canvas.height;
                const scale = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
                const x = (pdfWidth - imgWidth * scale) / 2;
                const y = (pdfHeight - imgHeight * scale) / 2;
                pdf.addImage(imgData, 'PNG', x, y, imgWidth * scale, imgHeight * scale);
                pdf.save("employee_table.pdf");
            });
    };

    const exportExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(employee);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Employees");
        XLSX.writeFile(workbook, "employee_table.xlsx");
    };

    return (
        <div className='container'>
            <div>
                <h1 className='text-center'>List the Details</h1>
                <button onClick={exportPDF}>Export to PDF</button>
                <button onClick={exportExcel}>Export to Excel</button>
            </div>
            {error && <p className='text-danger'>Error: {error}</p>}
            <table id='employee-table' className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employee.map((emp) => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.firstName}</td>
                            <td>{emp.lastName}</td>
                            <td>{emp.email}</td>
                            <td>{emp.userName}</td>
                            <td>{emp.password}</td>
                            <td>
                                <button onClick={() => updateEmployee(emp.id)}>Update</button>
                                <button className='btn btn-danger' onClick={() => removeEmployee(emp.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeTable;
