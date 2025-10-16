/***********************
 *  Data & Persistence
 ***********************/
const STORAGE_KEY = "ems_demo_data_v1";

// sample initial dataset
const sampleData = [
          {
                    id: 1,
                    empId: "Emp 001",
                    name: "Bob",
                    manager: "Angel",
                    department: "Marketing",
                    position: "Manager",
                    salary: 500000,
                    status: "Active",
                    phone: "9876543210",
                    email: "bob@example.com",
                    emergency: "9123456780",
                    relation: "Wife",
                    referred: "Ravi",
          },
          {
                    id: 2,
                    empId: "Emp 002",
                    name: "Charlie",
                    manager: "Charles",
                    department: "IT",
                    position: "Developer",
                    salary: 750000,
                    status: "Resigned",
                    phone: "9123456789",
                    email: "charlie@example.com",
                    emergency: "",
                    relation: "",
                    referred: "",
          },
          {
                    id: 3,
                    empId: "Emp 003",
                    name: "Asha",
                    manager: "Angel",
                    department: "Finance",
                    position: "Accountant",
                    salary: 450000,
                    status: "Active",
                    phone: "9001112233",
                    email: "asha@example.com",
                    emergency: "",
                    relation: "",
                    referred: "",
          },
          {
                    id: 4,
                    empId: "Emp 004",
                    name: "Ravi",
                    manager: "N/A",
                    department: "Sales",
                    position: "Sales Executive",
                    salary: 300000,
                    status: "Inactive",
                    phone: "9811223344",
                    email: "ravi@example.com",
                    emergency: "",
                    relation: "",
                    referred: "",
          },
          {
                    id: 5,
                    empId: "Emp 005",
                    name: "Priya",
                    manager: "Ron",
                    department: "Testing",
                    position: "Tester",
                    salary: 380000,
                    status: "Active",
                    phone: "9002223334",
                    email: "priya@example.com",
                    emergency: "",
                    relation: "",
                    referred: "",
          },
          {
                    id: 6,
                    empId: "Emp 006",
                    name: "Suresh",
                    manager: "Ron",
                    department: "Development",
                    position: "Developer",
                    salary: 520000,
                    status: "Active",
                    phone: "9002223335",
                    email: "suresh@example.com",
                    emergency: "",
                    relation: "",
                    referred: "",
          },
          {
                    id: 7,
                    empId: "Emp 007",
                    name: "Kumar",
                    manager: "N/A",
                    department: "IT",
                    position: "Support",
                    salary: 300000,
                    status: "Blacklisted",
                    phone: "9002223336",
                    email: "kumar@example.com",
                    emergency: "",
                    relation: "",
                    referred: "",
          },
          {
                    id: 8,
                    empId: "Emp 008",
                    name: "Meera",
                    manager: "Angel",
                    department: "HR",
                    position: "HR Executive",
                    salary: 420000,
                    status: "Active",
                    phone: "9003334445",
                    email: "meera@example.com",
                    emergency: "",
                    relation: "",
                    referred: "",
          },
          {
                    id: 9,
                    empId: "Emp 009",
                    name: "Vikas",
                    manager: "Charles",
                    department: "IT",
                    position: "DevOps",
                    salary: 650000,
                    status: "Active",
                    phone: "9003334446",
                    email: "vikas@example.com",
                    emergency: "",
                    relation: "",
                    referred: "",
          },
          {
                    id: 10,
                    empId: "Emp 010",
                    name: "Anita",
                    manager: "Angel",
                    department: "Marketing",
                    position: "Analyst",
                    salary: 350000,
                    status: "Resigned",
                    phone: "9003334447",
                    email: "anita@example.com",
                    emergency: "",
                    relation: "",
                    referred: "",
          },
          {
                    id: 11,
                    empId: "Emp 011",
                    name: "Deepak",
                    manager: "Ron",
                    department: "Development",
                    position: "Developer",
                    salary: 480000,
                    status: "Active",
                    phone: "9004445556",
                    email: "deepak@example.com",
                    emergency: "",
                    relation: "",
                    referred: "",
          },
          {
                    id: 12,
                    empId: "Emp 012",
                    name: "Richa",
                    manager: "Angel",
                    department: "Finance",
                    position: "Accountant",
                    salary: 390000,
                    status: "Active",
                    phone: "9004445557",
                    email: "richa@example.com",
                    emergency: "",
                    relation: "",
                    referred: "",
          },
          {
                    id: 13,
                    empId: "Emp 013",
                    name: "Gopal",
                    manager: "Charles",
                    department: "IT",
                    position: "Tester",
                    salary: 310000,
                    status: "Inactive",
                    phone: "9004445558",
                    email: "gopal@example.com",
                    emergency: "",
                    relation: "",
                    referred: "",
          },
          {
                    id: 14,
                    empId: "Emp 014",
                    name: "Kavita",
                    manager: "Angel",
                    department: "HR",
                    position: "Recruiter",
                    salary: 360000,
                    status: "Active",
                    phone: "9004445559",
                    email: "kavita@example.com",
                    emergency: "",
                    relation: "",
                    referred: "",
          },
];

let employees = loadData();

function loadData () {
          try
          {
                    const raw = localStorage.getItem( STORAGE_KEY );
                    if ( raw )
                    {
                              return JSON.parse( raw );
                    } else
                    {
                              localStorage.setItem( STORAGE_KEY, JSON.stringify( sampleData ) );
                              return sampleData.slice();
                    }
          } catch ( e )
          {
                    console.error( e );
                    localStorage.setItem( STORAGE_KEY, JSON.stringify( sampleData ) );
                    return sampleData.slice();
          }
}

function saveData () {
          localStorage.setItem( STORAGE_KEY, JSON.stringify( employees ) );
          render();
}

/***********************
 *  UI / state
 ***********************/
let filterStatus = "Active";
let pageSize = parseInt( document.getElementById( "pageSize" ).value, 10 );
let currentPage = 1;
let searchQuery = "";

// event listeners
document.getElementById( "searchInput" ).addEventListener( "input", ( e ) => {
          searchQuery = e.target.value.trim().toLowerCase();
          currentPage = 1;
          render();
} );

document.getElementById( "pageSize" ).addEventListener( "change", ( e ) => {
          pageSize = parseInt( e.target.value, 10 );
          currentPage = 1;
          render();
} );

// filter buttons
document.querySelectorAll( ".filter-row .btn" ).forEach( ( btn ) => {
          btn.addEventListener( "click", ( e ) => {
                    const s = btn.getAttribute( "data-status" );
                    filterStatus = s;
                    currentPage = 1;
                    highlightActiveFilter();
                    render();
          } );
} );

function highlightActiveFilter () {
          document.querySelectorAll( ".filter-row .btn" ).forEach( ( b ) => {
                    b.classList.remove( "active" );
                    if ( b.getAttribute( "data-status" ) === filterStatus )
                              b.classList.add( "active" );
          } );
}

// sample, import, export handlers
document.getElementById( "btnSample" ).addEventListener( "click", () => {
          const csv = generateCSV( employees.slice( 0, 5 ) );
          downloadFile( csv, "sample_employees.csv" );
} );
document
          .getElementById( "btnImport" )
          .addEventListener( "click", () =>
                    document.getElementById( "importCSV" ).click()
          );
document.getElementById( "importCSV" ).addEventListener( "change", handleImport );
document.getElementById( "btnExport" ).addEventListener( "click", () => {
          const csv = generateCSV( employees );
          downloadFile( csv, "employees_export.csv" );
} );

function handleImport ( e ) {
          const file = e.target.files[ 0 ];
          if ( !file ) return;
          const reader = new FileReader();
          reader.onload = function ( evt ) {
                    const txt = evt.target.result;
                    const imported = parseCSV( txt );
                    if ( imported && imported.length )
                    {
                              // map incoming rows: expect headers matching form fields (empId,name,manager,department,position,salary,status,phone,email,emergency,relation,referred)
                              let maxId = employees.reduce( ( a, b ) => Math.max( a, b.id ), 0 );
                              imported.forEach( ( row ) => {
                                        maxId++;
                                        employees.push( {
                                                  id: maxId,
                                                  empId: row.empId || `Emp ${ String( maxId ).padStart( 3, "0" ) }`,
                                                  name: row.name || "",
                                                  manager: row.manager || "",
                                                  department: row.department || "",
                                                  position: row.position || "",
                                                  salary: Number( row.salary ) || 0,
                                                  status: row.status || "Active",
                                                  phone: row.phone || "",
                                                  email: row.email || "",
                                                  emergency: row.emergency || "",
                                                  relation: row.relation || "",
                                                  referred: row.referred || "",
                                        } );
                              } );
                              saveData();
                              alert( "Imported " + imported.length + " rows" );
                    } else
                    {
                              alert( "No valid rows found in CSV" );
                    }
          };
          reader.readAsText( file );
          e.target.value = "";
}

// Add button -> open modal
const modalEmployeeEl = document.getElementById( "modalEmployee" );
const bsModalEmployee = new bootstrap.Modal( modalEmployeeEl, {
          backdrop: "static",
} );

document
          .getElementById( "btnAdd" )
          .addEventListener( "click", () => openAddModal() );

// table actions use event delegation
document.getElementById( "tableBody" ).addEventListener( "click", ( e ) => {
          const tr = e.target.closest( "tr" );
          if ( !tr ) return;
          const id = Number( tr.dataset.id );
          if ( e.target.closest( ".action-edit" ) ) openEditModal( id );
          if ( e.target.closest( ".action-del" ) ) handleDelete( id );
          if ( e.target.closest( ".action-details" ) ) openDetailsModal( id );
} );

/***********************
 *  Rendering & Pagination
 ***********************/

let sortColumn = "id"; // default sort by ID
let sortDirection = "desc"; // newest (latest) on top

document.querySelectorAll("#empTable thead th").forEach((th, index) => {
  th.addEventListener("click", () => {
    const columnMap = ["empId", "name", "manager", "department", "position", "salary", "status"];
    const col = columnMap[index];
    if (!col) return; // skip 'Actions' column

    if (sortColumn === col) {
      // Toggle sort direction
      sortDirection = sortDirection === "asc" ? "desc" : "asc";
    } else {
      sortColumn = col;
      sortDirection = "asc";
    }

    render();
    updateSortIndicators();
  });
});


// function filteredList () {
//           return employees.filter( ( emp ) => {
//                     const matchesStatus = filterStatus === "All" || emp.status === filterStatus;
//                     const q = searchQuery;
//                     if ( !q ) return matchesStatus;
//                     // search across empId, name, manager, department
//                     return (
//                               matchesStatus &&
//                               ( ( emp.empId && emp.empId.toLowerCase().includes( q ) ) ||
//                                         ( emp.name && emp.name.toLowerCase().includes( q ) ) ||
//                                         ( emp.manager && emp.manager.toLowerCase().includes( q ) ) ||
//                                         ( emp.department && emp.department.toLowerCase().includes( q ) ) )
//                     );
//           } );
// }

function filteredList() {
  let list = employees.filter((emp) => {
    const matchesStatus =
      filterStatus.toLowerCase() === "all" ||
      (emp.status && emp.status.toLowerCase() === filterStatus.toLowerCase());

    const q = searchQuery;
    if (!q) return matchesStatus;

    return (
      matchesStatus &&
      ((emp.empId && emp.empId.toLowerCase().includes(q)) ||
        (emp.name && emp.name.toLowerCase().includes(q)) ||
        (emp.manager && emp.manager.toLowerCase().includes(q)) ||
        (emp.department && emp.department.toLowerCase().includes(q)))
    );
  });

  // 🧭 Apply sorting
  list.sort((a, b) => {
    let valA = a[sortColumn] ?? "";
    let valB = b[sortColumn] ?? "";

    // Convert numbers correctly
    if (sortColumn === "salary" || sortColumn === "empId") {
      valA = parseFloat(valA) || 0;
      valB = parseFloat(valB) || 0;
    } else {
      valA = valA.toString().toLowerCase();
      valB = valB.toString().toLowerCase();
    }

    if (valA < valB) return sortDirection === "asc" ? -1 : 1;
    if (valA > valB) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  return list;
}

function updateSortIndicators() {
  document.querySelectorAll("#empTable thead th").forEach((th, index) => {
    th.classList.remove("sorted-asc", "sorted-desc");
    const columnMap = ["empId", "name", "manager", "department", "position", "salary", "status"];
    const col = columnMap[index];
    if (col === sortColumn) {
      th.classList.add(sortDirection === "asc" ? "sorted-asc" : "sorted-desc");
    }
  });
}


function render () {
          highlightActiveFilter();
          const list = filteredList();
          const total = list.length;
          document.getElementById(
                    "totalEmployees"
          ).innerText = `Total Employee: ${ employees.length }`;

          // pagination
          const pages = Math.max( 1, Math.ceil( total / pageSize ) );
          if ( currentPage > pages ) currentPage = pages;
          const start = ( currentPage - 1 ) * pageSize;
          const end = Math.min( start + pageSize, total );
          const visible = list.slice( start, end );

          // info text
          const info = document.getElementById( "infoText" );
          info.innerText = `Showing ${ total === 0 ? 0 : start + 1
                    } to ${ end } of ${ total } employees`;

          // table rows
          const tbody = document.getElementById( "tableBody" );
          tbody.innerHTML = "";
          visible.forEach( ( emp ) => {
                    const tr = document.createElement( "tr" );
                    tr.dataset.id = emp.id;
                    tr.innerHTML = `
          <td>${ emp.empId }</td>
          <td>${ escapeHtml( emp.name ) }</td>
          <td>${ escapeHtml( emp.manager ) }</td>
          <td>${ escapeHtml( emp.department ) }</td>
          <td>${ escapeHtml( emp.position ) }</td>
          <td>${ numberWithCommas( emp.salary ) }</td>
          <td>${ emp.status }</td>
          <td>
                    <button class="action-btn action-details" title="Details"><i class="fas fa-info-circle"></i></button>
                    <button class="action-btn action-edit" title="Edit"><i class="fas fa-pen"></i></button>
                    <button class="action-btn action-del" title="Delete"><i class="fas fa-trash"></i></button>
          </td>`;
                    tbody.appendChild( tr );
          } );

          // pagination UI
          renderPagination( pages );
}

function renderPagination ( totalPages ) {
          const ul = document.getElementById( "pagination" );
          ul.innerHTML = "";
          const addPageBtn = ( label, disabled, active, page ) => {
                    const li = document.createElement( "li" );
                    li.className =
                              "page-item " + ( disabled ? "disabled " : "" ) + ( active ? "active " : "" );
                    li.innerHTML = `<button class="page-link page-btn">${ label }</button>`;
                    if ( !disabled && !active )
                    {
                              li.querySelector( "button" ).addEventListener( "click", () => {
                                        currentPage = page;
                                        render();
                              } );
                    }
                    return li;
          };
          // prev
          ul.appendChild( addPageBtn( "‹", currentPage === 1, false, currentPage - 1 ) );
          // page numbers (smart display)
          const maxButtons = 5;
          let start = Math.max( 1, currentPage - Math.floor( maxButtons / 2 ) );
          let end = Math.min( totalPages, start + maxButtons - 1 );
          if ( end - start < maxButtons - 1 ) start = Math.max( 1, end - maxButtons + 1 );
          for ( let p = start; p <= end; p++ )
          {
                    ul.appendChild( addPageBtn( p, false, p === currentPage, p ) );
          }
          // next
          ul.appendChild(
                    addPageBtn( "›", currentPage === totalPages, false, currentPage + 1 )
          );
}

/***********************
 *  Modals / Forms
 ***********************/
const form = document.getElementById( "employeeForm" );
let editingId = null;

// validate required fields visually
function validateVisual () {
          const requireds = form.querySelectorAll( ".is-required" );
          let allValid = true;
          requireds.forEach( ( input ) => {
                    const val = input.value?.trim();
                    // if input is select (selects don't have value on class), handle
                    const isSelect = input.tagName.toLowerCase() === "select";
                    if ( isSelect )
                    {
                              if ( !input.value )
                              {
                                        input.classList.add( "invalid" );
                                        input.classList.remove( "valid" );
                                        allValid = false;
                              } else
                              {
                                        input.classList.remove( "invalid" );
                                        input.classList.add( "valid" );
                              }
                    } else
                    {
                              // HTML5 validation
                              if ( !input.checkValidity() )
                              {
                                        input.classList.add( "invalid" );
                                        input.classList.remove( "valid" );
                                        allValid = false;
                              } else
                              {
                                        input.classList.remove( "invalid" );
                                        input.classList.add( "valid" );
                              }
                    }
          } );
          // toggle save button
          document.getElementById( "saveBtn" ).disabled = !allValid;
}

// event delegation for inputs to validate
form.addEventListener( "input", validateVisual );
form.addEventListener( "change", validateVisual );

form.addEventListener( "submit", ( e ) => {
          e.preventDefault();
          const fd = new FormData( form );
          const obj = {
                    id: editingId || employees.reduce( ( a, b ) => Math.max( a, b.id ), 0 ) + 1,
                    empId: fd.get( "empId" ) || `Emp ${ String( Date.now() ).slice( -4 ) }`,
                    name: fd.get( "name" ) || "",
                    phone: fd.get( "phone" ) || "",
                    email: fd.get( "email" ) || "",
                    gender: fd.get( "gender" ) || "",
                    manager: fd.get( "manager" ) || "",
                    department: fd.get( "department" ) || "",
                    position: fd.get( "position" ) || "",
                    status: fd.get( "status" ) || "Active",
                    salary: Number( fd.get( "salary" ) ) || 0,
                    emergency: fd.get( "emergency" ) || "",
                    relation: fd.get( "relation" ) || "",
                    referred: fd.get( "referred" ) || "",
          };

          if ( editingId )
          {
                    // update
                    const idx = employees.findIndex( ( x ) => x.id === editingId );
                    if ( idx >= 0 ) employees[ idx ] = obj;
                    editingId = null;
          } else
          {
                    // add at beginning
                    employees.unshift( obj );
          }
          saveData();
          bsModalEmployee.hide();
          form.reset();
          // remove visual validation classes
          form
                    .querySelectorAll( ".is-required" )
                    .forEach( ( i ) => i.classList.remove( "invalid", "valid" ) );
          document.getElementById( "saveBtn" ).disabled = true;
} );

function openAddModal () {
          editingId = null;
          document.getElementById( "modalTitle" ).innerText = "Add Employee";
          form.reset();
          form
                    .querySelectorAll( ".is-required" )
                    .forEach( ( i ) => i.classList.remove( "invalid", "valid" ) );
          document.getElementById( "saveBtn" ).disabled = true;
          bsModalEmployee.show();
}

function openEditModal ( id ) {
          const emp = employees.find( ( x ) => x.id === id );
          if ( !emp ) return alert( "Employee not found" );
          editingId = id;
          document.getElementById( "modalTitle" ).innerText = "Edit Employee";
          form.empId.value = emp.empId || "";
          form.name.value = emp.name || "";
          form.phone.value = emp.phone || "";
          form.email.value = emp.email || "";
          form.gender.value = emp.gender || "";
          form.manager.value = emp.manager || "";
          form.department.value = emp.department || "";
          form.position.value = emp.position || "";
          form.status.value = emp.status || "";
          form.salary.value = emp.salary || "";
          form.emergency.value = emp.emergency || "";
          form.relation.value = emp.relation || "";
          form.referred.value = emp.referred || "";
          // visual
          validateVisual();
          bsModalEmployee.show();
}

// details modal
// 
const bsDetails = new bootstrap.Modal( document.getElementById( "modalDetails" ) );
function openDetailsModal ( id ) {
          const emp = employees.find( ( x ) => x.id === id );
          if ( !emp ) return alert( "Employee not found" );
          const d = document.getElementById( "detailsBody" );

          // Gender Icon & Color Logic
          let genderIcon = "fa-genderless";
          let genderColor = "#7c3aed";
          if ( emp.gender?.toLowerCase() === "male" )
          {
                    genderIcon = "fa-mars";
                    genderColor = "#3b82f6";
          } else if ( emp.gender?.toLowerCase() === "female" )
          {
                    genderIcon = "fa-venus";
                    genderColor = "#ec4899";
          }

          d.innerHTML = `
    <div class="details-card">
      <!-- Header -->
      <div class="details-header">
        <div class="profile-icon">
          <i class="fas fa-user-circle"></i>
        </div>
        <div>
          <h4 class="emp-name mb-0">${ escapeHtml( emp.name ) }</h4>
          <div class="text-muted small">${ escapeHtml( emp.position ) } — ${ escapeHtml( emp.department ) }</div>
        </div>
      </div>

      <hr class="details-divider">

      <!-- Info Grid -->
      <div class="details-grid">
        <div><i class="fas fa-id-badge"></i> <span><strong>ID:</strong> ${ escapeHtml( emp.empId ) }</span></div>
        <div><i class="fas ${ genderIcon }" style="color:${ genderColor }"></i> <span><strong>Gender:</strong> ${ escapeHtml( emp.gender || "-" ) }</span></div>
        <div><i class="fas fa-user-tie"></i> <span><strong>Manager:</strong> ${ escapeHtml( emp.manager || "-" ) }</span></div>
        <div><i class="fas fa-calendar-alt"></i> <span><strong>Date of Birth:</strong> ${ escapeHtml( emp.dob || "-" ) }</span></div>
        <div><i class="fas fa-briefcase"></i> <span><strong>Status:</strong> ${ escapeHtml( emp.status ) }</span></div>
        <div><i class="fas fa-money-bill-wave"></i> <span><strong>Salary:</strong> ₹${ numberWithCommas( emp.salary ) }</span></div>
        <div><i class="fas fa-envelope"></i> <span><strong>Email:</strong> ${ escapeHtml( emp.email || "-" ) }</span></div>
        <div><i class="fas fa-calendar-alt"></i> <span><strong>Date of Joining:</strong> ${ escapeHtml( emp.doj || "-" ) }</span></div>
        <div><i class="fas fa-phone"></i> <span><strong>Phone:</strong> ${ escapeHtml( emp.phone || "-" ) }</span></div>
        <div><i class="fas fa-ambulance"></i> <span><strong>Emergency No:</strong> ${ escapeHtml( emp.emergency || "-" ) }</span></div>
        <div><i class="fas fa-people-arrows"></i> <span><strong>Relation:</strong> ${ escapeHtml( emp.relation || "-" ) }</span></div>
        <div><i class="fas fa-user-plus"></i> <span><strong>Referred By:</strong> ${ escapeHtml( emp.referred || "-" ) }</span></div>
      </div>
    </div>
  `;
          bsDetails.show();
}


// delete confirmation
const deleteModal = new bootstrap.Modal( document.getElementById( "deleteConfirmModal" ) );
let deleteTargetId = null;

function handleDelete ( id ) {
          deleteTargetId = id;
          deleteModal.show();
}

document.getElementById( "confirmDeleteBtn" ).addEventListener( "click", () => {
          if ( deleteTargetId !== null )
          {
                    employees = employees.filter( ( x ) => x.id !== deleteTargetId );
                    saveData();
                    deleteTargetId = null;
                    deleteModal.hide();
          }
} );



/***********************
 *  Utilities
 ***********************/
function escapeHtml ( s ) {
          if ( !s && s !== 0 ) return "";
          return String( s ).replace(
                    /[&<>"']/g,
                    ( c ) =>
                    ( { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[
                              c
                    ] )
          );
}
function numberWithCommas ( x ) {
          if ( x === undefined || x === null ) return "";
          return x.toString().replace( /\B(?=(\d{3})+(?!\d))/g, "," );
}

// CSV helpers
function generateCSV ( rows ) {
          if ( !rows || !rows.length ) return "";
          const headers = [
                    "empId",
                    "name",
                    "manager",
                    "department",
                    "position",
                    "salary",
                    "status",
                    "phone",
                    "email",
                    "emergency",
                    "relation",
                    "referred",
          ];
          const lines = [ headers.join( "," ) ];
          rows.forEach( ( r ) => {
                    const vals = headers.map(
                              ( h ) =>
                                        '"' + String( r[ h ] === undefined ? "" : r[ h ] ).replace( /"/g, '""' ) + '"'
                    );
                    lines.push( vals.join( "," ) );
          } );
          return lines.join( "\n" );
}

function downloadFile ( text, filename ) {
          const blob = new Blob( [ text ], { type: "text/csv" } );
          const url = URL.createObjectURL( blob );
          const a = document.createElement( "a" );
          a.href = url;
          a.download = filename;
          document.body.appendChild( a );
          a.click();
          a.remove();
          URL.revokeObjectURL( url );
}

// naive CSV parse (expects header row)
function parseCSV ( txt ) {
          const lines = txt.split( /\r?\n/ ).filter( ( l ) => l.trim() );
          if ( lines.length < 2 ) return [];
          const headers = lines[ 0 ]
                    .split( "," )
                    .map( ( h ) => h.trim().replace( /^"|"$/g, "" ) );
          const data = [];
          for ( let i = 1; i < lines.length; i++ )
          {
                    const row = lines[ i ];
                    // simple split by comma, handle quoted values roughly
                    const values = row.match( /(".*?"|[^",\s]+)(?=\s*,|\s*$)/g ) || [];
                    const obj = {};
                    for ( let j = 0; j < headers.length; j++ )
                    {
                              const k = headers[ j ] || "col" + j;
                              const val = values[ j ] ? values[ j ].replace( /^"|"$/g, "" ).trim() : "";
                              obj[ k ] = val;
                    }
                    data.push( obj );
          }
          return data;
}

/***********************
 *  initial render
 ***********************/
render();
