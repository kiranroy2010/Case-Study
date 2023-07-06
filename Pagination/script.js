var currentPage = 1;
var pageSize = 5;
var tableRows = document.querySelectorAll('#policy-table tr');

function showPage(page) {
  var startIndex = (page - 1) * pageSize;
  var endIndex = Math.min(startIndex + pageSize, tableRows.length);

  for (var i = 0; i < tableRows.length; i++) {
    if (i >= startIndex && i < endIndex) {
      tableRows[i].style.display = 'table-row';
    } else {
      tableRows[i].style.display = 'none';
    }
  }

  updatePagination();
}

function updatePagination() {
  var prevLink = document.getElementById('prev-link');
  var nextLink = document.getElementById('next-link');

  prevLink.style.visibility = currentPage === 1 ? 'hidden' : 'visible';
  nextLink.style.visibility = currentPage *pageSize >= tableRows.length ? 'hidden' : 'visible';
}

function previousPage() {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
}

function nextPage() {
  if (currentPage * pageSize < tableRows.length) {
    currentPage++;
    showPage(currentPage);
  }
}

// Initial rendering
showPage(currentPage);
