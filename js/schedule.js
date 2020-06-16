var p0Schedule = [
    '<p class="my-0 fw-700">000</p>' +
    '<p class="my-0"><b>Team NW-A1</b></p>' +
    '<p class="my-0 fs-12"><b>Magic Chain</b></p>',


    '<p class="my-0 fw-700">000</p>' +
    '<p class="my-0"><b>Team NW-A1</b></p>' +
    '<p class="my-0 fs-12"><b>Magic Chain</b></p>',


    '<p class="my-0 fw-700">000</p>' +
    '<p class="my-0"><b>Team NW-A1</b></p>' +
    '<p class="my-0 fs-12"><b>Magic Chain</b></p>',

    '<p class="my-0 fw-700">000</p>' +
    '<p class="my-0"><b>Team NW-A1</b></p>' +
    '<p class="my-0 fs-12"><b>Magic Chain</b></p>',


    '<p class="my-0 fw-700">000</p>' +
    '<p class="my-0"><b>Team NW-A1</b></p>' +
    '<p class="my-0 fs-12"><b>Magic Chain</b></p>'
];

var p1Schedule = [
    '<p class="my-0 fw-700">000</p>' +
    '<p class="my-0"><b>Team NW-A1</b></p>' +
    '<p class="my-0 fs-12"><b>Magic Chain</b></p>',


    '<p class="my-0 fw-700">000</p>' +
    '<p class="my-0"><b>Team NW-A1</b></p>' +
    '<p class="my-0 fs-12"><b>Magic Chain</b></p>',


    '<p class="my-0 fw-700">000</p>' +
    '<p class="my-0"><b>Team NW-A1</b></p>' +
    '<p class="my-0 fs-12"><b>Magic Chain</b></p>',

    '<p class="my-0 fw-700">000</p>' +
    '<p class="my-0"><b>Team NW-A1</b></p>' +
    '<p class="my-0 fs-12"><b>Magic Chain</b></p>',


    '<p class="my-0 fw-700">000</p>' +
    '<p class="my-0"><b>Team NW-A1</b></p>' +
    '<p class="my-0 fs-12"><b>Magic Chain</b></p>'
];

var p2Schedule = [
    '<p class="my-0 fw-700">000</p>' +
    '<p class="my-0"><b>Team NW-A1</b></p>' +
    '<p class="my-0 fs-12"><b>Magic Chain</b></p>',


    '<p class="my-0 fw-700">000</p>' +
    '<p class="my-0"><b>Team NW-A1</b></p>' +
    '<p class="my-0 fs-12"><b>Magic Chain</b></p>',


    '<p class="my-0 fw-700">000</p>' +
    '<p class="my-0"><b>Team NW-A1</b></p>' +
    '<p class="my-0 fs-12"><b>Magic Chain</b></p>',

    '<p class="my-0 fw-700">000</p>' +
    '<p class="my-0"><b>Team NW-A1</b></p>' +
    '<p class="my-0 fs-12"><b>Magic Chain</b></p>',


    '<p class="my-0 fw-700">000</p>' +
    '<p class="my-0"><b>Team NW-A1</b></p>' +
    '<p class="my-0 fs-12"><b>Magic Chain</b></p>'
];

var p3Schedule = [
    '<p class="my-0 fw-700">000</p>' +
    '<p class="my-0"><b>Team NW-A1</b></p>' +
    '<p class="my-0 fs-12"><b>Magic Chain</b></p>',


    '<p class="my-0 fw-700">000</p>' +
    '<p class="my-0"><b>Team NW-A1</b></p>' +
    '<p class="my-0 fs-12"><b>Magic Chain</b></p>',


    '<p class="my-0 fw-700">000</p>' +
    '<p class="my-0"><b>Team NW-A1</b></p>' +
    '<p class="my-0 fs-12"><b>Magic Chain</b></p>',

    '<p class="my-0 fw-700">000</p>' +
    '<p class="my-0"><b>Team NW-A1</b></p>' +
    '<p class="my-0 fs-12"><b>Magic Chain</b></p>',


    '<p class="my-0 fw-700">000</p>' +
    '<p class="my-0"><b>Team NW-A1</b></p>' +
    '<p class="my-0 fs-12"><b>Magic Chain</b></p>'
];

// total 24
var hkbcolFinalists = [
    'magic-chain',
    'magic-chain',
    'magic-chain',
    'magic-chain',
    'magic-chain'
]


var p0 = document.getElementById('p0');
// var p1 = document.getElementById('p1');
// var p2 = document.getElementById('p2');
// var p3 = document.getElementById('p3');

for (let i = 0; i < p0Schedule.length; i++) {
    p0.innerHTML += (
        '<div class="w-20 px-0" id="" style="cursor: pointer">' +
        '<div class="cell" onclick="showWeb(0)">' +
        p0Schedule[i] +
        '</div>' +
        '</div>'
    );

    p1.innerHTML += (
        '<div class="w-20 px-0" id="" style="cursor: pointer">' +
        '<div class="cell" onclick="showWeb(0)">' +
        p1Schedule[i] +
        '</div>' +
        '</div>'
    );

    p2.innerHTML += (
        '<div class="w-20 px-0" id="" style="cursor: pointer">' +
        '<div class="cell" onclick="showWeb(0)">' +
        p2Schedule[i] +
        '</div>' +
        '</div>'
    );

    p3.innerHTML += (
        '<div class="w-20 px-0" id="" style="cursor: pointer">' +
        '<div class="cell" onclick="showWeb(0)">' +
        p3Schedule[i] +
        '</div>' +
        '</div>'
    );

}

function showWeb(index) {
    window.open('https://hk.ibcol.org/2020-HKBCOL-Finalists/'+hkbcolFinalists[index]+'.html');
}