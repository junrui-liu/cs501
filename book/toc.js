// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="syllabus.html"><strong aria-hidden="true">1.</strong> Syllabus</a></li><li class="chapter-item expanded "><a href="modules/index.html"><strong aria-hidden="true">2.</strong> Modules</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="modules/week1.html"><strong aria-hidden="true">2.1.</strong> How to Design Your Lesson</a></li><li class="chapter-item expanded "><a href="modules/week2.html"><strong aria-hidden="true">2.2.</strong> Learning Objectives &amp; Active Learning</a></li><li class="chapter-item expanded "><a href="modules/week3.html"><strong aria-hidden="true">2.3.</strong> How to Build Autograders</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.4.</strong> How to Run Labs</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.5.</strong> How to Make Great Slides</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.6.</strong> Crafting Your Teaching Philosophy Statement</div></li></ol></li><li class="chapter-item expanded "><a href="assignments/index.html"><strong aria-hidden="true">3.</strong> Assignments</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="assignments/attend-cit.html"><strong aria-hidden="true">3.1.</strong> Attend a CIT Workshop</a></li><li class="chapter-item expanded "><a href="assignments/autograder-lab.html"><strong aria-hidden="true">3.2.</strong> Autograder Lab</a></li><li class="chapter-item expanded "><a href="assignments/teaching-journal.html"><strong aria-hidden="true">3.3.</strong> [TA] Teaching Journal</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.4.</strong> [TA] Teaching Philosophy</div></li><li class="chapter-item expanded "><a href="assignments/teaching-observation.html"><strong aria-hidden="true">3.5.</strong> [Non-TA] Teaching Observation</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.6.</strong> [Non-TA] Micro-Teaching Demo</div></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
