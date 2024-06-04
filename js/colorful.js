var config = {
    readme: {
        name: '欢迎 Welcome',
        type: 'md',
        value: 'readme',
        style: ['medium'],
        link: ['entry', 'icon'],
        icon: 'help',
        start: true
    },
    medication: {
        name: '药物 Medication',
        type: 'okusuri',
        value: {
            tail: {
                name: '右美沙芬',
                type: '123',
                value: './qwq/212.html',
                style: ['large']
            },
            magika: {
                name: '金刚烷胺',
                type: '123',
                value: 'internet1',
                style: ['large']
            },
            internet: {
                name: '普瑞巴林',
                type: '123',
                value: 'internet2',
                style: ['large']
            },
            recovering: {
                name: '可待因',
                type: '123',
                value: 'recovering',
                style: ['large']
            }
        },
        desc: '薬物',
        style: ['medium'],
        link: ['entry', 'icon']
    },
    secret: {
        name: '秘密 Secret',
        type: 'folder',
        value: {
            secret2: {
                name: '[encrypted]',
                type: 'folder',
                value: {
                    secret3: {
                        name: '???',
                        type: 'folder',
                        value: {
                            '縺ｪ縺ｫ繧ゅ↑縺': {}
                        }
                    }
                }
            }
        },
        link: ['entry']
    },
    liq: {
        name: 'Liq™',
        type: 'folder',
        value: {
            internet8: {
                name: 'L²S²',
                type: 'iframe',
                value: './llss/index.html',
                style: ['large']
            },
        },
        desc: 'All support in one place',
        style: ['medium'],
        link: ['entry', 'icon']
    },
    support: {
        name: '支持 Support',
        type: 'folder',
        value: {
            internet8: {
                name: '联系 Contact',
                type: 'url',
                value: './contact.html',
                style: ['large']
            },
            internet9: {
                name: 'PGP Public Key Block',
                type: 'md2',
                value: './support/pgp.html',
                style: ['large']
            }
        },
        desc: 'All support in one place',
        style: ['medium'],
        link: ['entry', 'icon']
    },
    legal: {
        name: '法律 Legal',
        type: 'folder',
        value: {
            internet8: {
                name: '条款和隐私声明 Terms &amp; Privacy Notice',
                type: 'md2',
                value: './terms.html',
                style: ['large']
            },
            internet9: {
                name: '数据处理要求 Data Handling Requirement',
                type: 'md2',
                value: './legal/data-handle.html',
                style: ['large']
            }
        },
        desc: 'Legal stuffs',
        style: ['medium'],
        link: ['entry', 'icon']
    },
    Twitter: {
        type: 'twitter',
        value: 'twitter.js',
        style: ['large'],
        link: ['icon']
    },
    Facebook: {
        type: 'facebook',
        value: 'facebook.js',
        style: ['large'],
        link: ['icon']
    },
    Instagram: {
        type: 'instagram',
        value: 'instagram.js',
        style: ['large'],
        link: ['icon']
    },
    Telegram: {
        type: 'telegram',
        value: 'telegram.js',
        style: ['large'],
        link: ['icon']
    },
    哔哩哔哩Bilibili: {
        type: 'bilibili',
        value: 'bilibili.js',
        style: ['large'],
        link: ['icon']
    },
    Youtube: {
        type: 'youtube',
        value: 'youtube.js',
        style: ['large'],
        link: ['icon']
    },
    unya: {
        name: '混沌 Chaos',
        type: 'js',
        value: 'unya.js',
        link: ['icon']
    }
};

const htmlConfig = {
    readme: `<h1>欢迎来到小冷官方网站</h1>
    <h2>Welcome to Xiaoleng Official Website</h2>
    <p><img src="./images/logo.png" alt="logo"></p>
    <p>这里是你最可爱的每天都在追逐着星光的梦想的小冷<br>
    I am ur cutest Xiaoleng, chasing the dreams of starlight every day.</p>
    <p>欢迎来到小冷的世界<br>
    Welcome to the world of Xiaoleng.</p>`,
}
const urlConfig = {'pasta.html': 'pasta.html'};
let windowId = 0;

function prepareDom() {
    const template = document.createElement('template');
    template.innerHTML = `
        <div class="arena">
            <div class="desktop"></div>
            <div class="bar">
                <div class="start"></div>
                <div class="taskbar"></div>
                <div class="status"></div>
                <div class="menu">
                    <div class="ribbon"></div>
                    <div class="list"></div>
                </div>
            </div>
        </div>`;
    
    const startLogo = 'START';
    for (let i = 0; i < startLogo.length; i++) {
        const span = document.createElement('span');
        span.textContent = startLogo[i];
        template.content.querySelector('.start').appendChild(span);
    }

    template.content.querySelector('.start').addEventListener('click', (ev) => {
        const startMenu = document.querySelector('.menu');
        if (!startMenu.style.display || startMenu.style.display == 'none') {
            startMenu.style.display = 'grid';
            document.querySelector('.start').classList.add('active');
        } else {
            startMenu.style.display = 'none';
            document.querySelector('.start').classList.remove('active');
        }
    }, false);

    document.body.appendChild(template.content);
}

function putWindowOnTop(window) {
    const allWindows = document.querySelectorAll('.window');
    for (const w of allWindows) {
        if (w.style.zIndex > window.style.zIndex) {
            w.style.zIndex--;
        }
    }
    window.style.zIndex = allWindows.length;
    const activeTask = document.querySelector('.bar>.taskbar>.task.active');
    if (activeTask) {
        activeTask.classList.remove('active');
    }
    document.getElementById(`t${window.id.slice(1)}`).classList.add('active');
}

function makeWindow(title, style) {
    const template = document.createElement('template');
    template.innerHTML = `
        <div class="window">
            <div class="header">
                <div class="title">${title}</div>
                <div class="button minimize"></div>
                <div class="button maximize"></div>
                <div class="button close"></div>
            </div>
            <div class="content"></div>
        </div>`;
    
    const divWindow = template.content.querySelector('.window');
    divWindow.id = `w${windowId}`;
    windowId++;
    for (const s of style) {
        divWindow.classList.add(s);
    }
    divWindow.style.zIndex = document.querySelectorAll('.window').length + 1;
    divWindow.addEventListener('mousedown', (ev) => { putWindowOnTop(divWindow); });

    const lastCoord = { x: 0, y: 0 };
    const divTitle = template.content.querySelector('.title');
    function dragFn(ev) {
        const x = Math.round(ev.clientX);
        const y = Math.round(ev.clientY);
        divWindow.style.left = `${divWindow.offsetLeft + x - lastCoord.x}px`;
        divWindow.style.top = `${divWindow.offsetTop + y - lastCoord.y}px`;
        lastCoord.x = x;
        lastCoord.y = y;
        divWindow.classList.add('dragging');
    }
    
    divTitle.addEventListener('pointerdown', (ev) => {
        if (divWindow.classList.contains('maximized')) { return; }
        lastCoord.x = Math.round(ev.clientX);
        lastCoord.y = Math.round(ev.clientY);
        divTitle.setPointerCapture(ev.pointerId);
        divTitle.addEventListener('pointermove', dragFn);
    });

    divTitle.addEventListener('pointerup', (ev) => {
        if (divWindow.classList.contains('maximized')) { return; }
        divWindow.classList.remove('dragging');
        divTitle.removeEventListener('pointermove', dragFn);
    });

    template.content.querySelector('.minimize').addEventListener('click', (ev) => {
        document.getElementById(`t${divWindow.id.slice(1)}`).classList.remove('active');
        divWindow.style.display = 'none';
    });

    function maximizeFn(ev) {
        if (divWindow.classList.contains('maximized')) {
            divWindow.classList.remove('maximized');
        } else {
            divWindow.classList.add('maximized');
        }
    }

    template.content.querySelector('.maximize').addEventListener('click', maximizeFn);
    divTitle.addEventListener('dblclick', maximizeFn);

    template.content.querySelector('.close').addEventListener('click', (ev) => {
        document.getElementById(`t${divWindow.id.slice(1)}`).remove();
        divWindow.remove();
    });

    return divWindow;
}

function createWindow(title, content, config) {
    const style = config && config.style ? config.style : [];
    const divWindow = makeWindow(title, style);
    if (content) {
        divWindow.children[1].appendChild(content);
    }
    document.querySelector('.desktop').appendChild(divWindow);
    divWindow.style.left = `${Math.floor(0.5 * Math.random() * (document.querySelector('.arena').offsetWidth - divWindow.offsetWidth))}px`;
    divWindow.style.top = `${Math.floor(0.33 * Math.random() * (document.querySelector('.arena').offsetHeight - divWindow.offsetHeight))}px`;

    const divTask = document.createElement('div');
    divTask.id = `t${divWindow.id.slice(1)}`;
    divTask.classList.add('task');
    divTask.textContent = title;
    divTask.addEventListener('click', (ev) => {
        divWindow.style.display = 'grid';
        putWindowOnTop(divWindow);
    });
    document.querySelector('.taskbar').appendChild(divTask);
    putWindowOnTop(divWindow);
    return divWindow;
}

function execute(key, action) {
    let name = key;
    if (action.name) {
        name = action.name;
    }
    const config = {};
    if (action.style) {
        config.style = action.style;
    }
    const handler = {
        text: () => { createWindow(name, document.createTextNode(action.value), config); },
        html: () => {
            const template = document.createElement('template');
            template.innerHTML = action.value;
            createWindow(name, template.content, config);
        },
        okusuri: () => {
            let hash = action.hash;
            if (!hash) { hash = '#' + key; }
            const desc = action.desc ? action.desc : '';
            const template = document.createElement('template');
            template.innerHTML = `
                <div class="folder-meta"><span>${name}</span><span>${hash}</span></div>
                <div class="folder-desc">${desc}</div>
                <div class="folder"></div>`;
            for (const file in action.value) {
                action.value[file].hash = hash + '/' + file;
                template.content.querySelector('.folder').appendChild(makeIcon(file, action.value[file]));
            }
            createWindow(name, template.content, config);
        },
        youxi: () => {
            let hash = action.hash;
            if (!hash) { hash = '#' + key; }
            const desc = action.desc ? action.desc : '';
            const template = document.createElement('template');
            template.innerHTML = `
                <div class="folder-meta"><span>${name}</span><span>${hash}</span></div>
                <div class="folder-desc">${desc}</div>
                <div class="folder"></div>`;
            for (const file in action.value) {
                action.value[file].hash = hash + '/' + file;
                template.content.querySelector('.folder').appendChild(makeIcon(file, action.value[file]));
            }
            createWindow(name, template.content, config);
        },
        sex: () => {
            let hash = action.hash;
            if (!hash) { hash = '#' + key; }
            const desc = action.desc ? action.desc : '';
            const template = document.createElement('template');
            template.innerHTML = `
                <div class="folder-meta"><span>${name}</span><span>${hash}</span></div>
                <div class="folder-desc">${desc}</div>
                <div class="folder"></div>`;
            for (const file in action.value) {
                action.value[file].hash = hash + '/' + file;
                template.content.querySelector('.folder').appendChild(makeIcon(file, action.value[file]));
            }
            createWindow(name, template.content, config);
        },
        123: async () => {
            console.log(111111);
            const response = await fetch(`${action.value}`);
            console.log(response, 'jhgf');
            const template = document.createElement('template');
            template.innerHTML = await response.text();
            createWindow(name, template.content, config);
        },
        game: async () => {
            console.log(111111);
            const response = await fetch(`${action.value}`);
            console.log(response, 'jhgf');
            const template = document.createElement('template');
            template.innerHTML = await response.text();
            createWindow(name, template.content, config);
        },
        sese: async () => {
            console.log(111111);
            const response = await fetch(`${action.value}`);
            console.log(response, 'jhgf');
            const template = document.createElement('template');
            template.innerHTML = await response.text();
            createWindow(name, template.content, config);
        },
        url: async () => {
            console.log(111111);
            const response = await fetch(`${action.value}`);
            console.log(response, 'jhgf');
            const template = document.createElement('template');
            template.innerHTML = await response.text();
            createWindow(name, template.content, config);
        },
        twitter: async () => {
            const script = document.createElement('script');
            script.setAttribute('src', `../js/${action.value}`);
            const newWindow = createWindow(name, null, config);
            window.root = newWindow.children[1];
            newWindow.appendChild(script);
        },
        facebook: async () => {
            const script = document.createElement('script');
            script.setAttribute('src', `../js/${action.value}`);
            const newWindow = createWindow(name, null, config);
            window.root = newWindow.children[1];
            newWindow.appendChild(script);
        },
        instagram: async () => {
            const script = document.createElement('script');
            script.setAttribute('src', `../js/${action.value}`);
            const newWindow = createWindow(name, null, config);
            window.root = newWindow.children[1];
            newWindow.appendChild(script);
        },
        telegram: async () => {
            const script = document.createElement('script');
            script.setAttribute('src', `../js/${action.value}`);
            const newWindow = createWindow(name, null, config);
            window.root = newWindow.children[1];
            newWindow.appendChild(script);
        },
        bilibili: async () => {
            const script = document.createElement('script');
            script.setAttribute('src', `../js/${action.value}`);
            const newWindow = createWindow(name, null, config);
            window.root = newWindow.children[1];
            newWindow.appendChild(script);
        },
        youtube: async () => {
            const script = document.createElement('script');
            script.setAttribute('src', `../js/${action.value}`);
            const newWindow = createWindow(name, null, config);
            window.root = newWindow.children[1];
            newWindow.appendChild(script);
        },
        md: async () => {
            const response = htmlConfig[action.value];
            const template = document.createElement('template');
            template.innerHTML = response;
            createWindow(name, template.content, config);
        },
        md2: async () => {
            console.log(111111);
            const response = await fetch(`${action.value}`);
            console.log(response, 'jhgf');
            const template = document.createElement('template');
            template.innerHTML = await response.text();
            createWindow(name, template.content, config);
        },
        folder: () => {
            let hash = action.hash;
            if (!hash) { hash = '#' + key; }
            const desc = action.desc ? action.desc : '';
            const template = document.createElement('template');
            template.innerHTML = `
                <div class="folder-meta"><span>${name}</span><span>${hash}</span></div>
                <div class="folder-desc">${desc}</div>
                <div class="folder"></div>`;
            for (const file in action.value) {
                action.value[file].hash = hash + '/' + file;
                template.content.querySelector('.folder').appendChild(makeIcon(file, action.value[file]));
            }
            createWindow(name, template.content, config);
        },
        iframe: () => {
            const iframe = document.createElement('iframe');
            iframe.setAttribute('src', `${action.value}`);
            iframe.setAttribute('scrolling', 'no');
            createWindow(name, iframe, config);
        },
        js: () => {
            const script = document.createElement('script');
            script.setAttribute('src', `../js/${action.value}`);
            const newWindow = createWindow(name, null, config);
            window.root = newWindow.children[1];
            newWindow.appendChild(script);
        }
    };
    if (!handler[action.type]) { return; }
    handler[action.type]();
}

function createEntry(key, action) {
    console.log(key, action);
    let name = key;
    if (action.name) {
        name = action.name;
    }
    const divEntry = document.createElement('div');
    divEntry.classList.add('entry');
    divEntry.textContent = name;
    if (action.type) {
        divEntry.addEventListener('click', (ev) => { console.log(key, action); execute(key, action); });
    }
    document.querySelector('.list').appendChild(divEntry);
}

function makeIcon(key, action) {
    let name = key;
    if (action.name) {
        name = action.name;
    }
    let icon = 'text';
    if (action.icon) {
        icon = action.icon;
    } else if (!action.type) {
        icon = 'restrict';
    } else if (action.type == 'folder') {
        icon = 'folder';
    } else if (action.type == '123') {
        icon = '123';
    } else if (action.type == 'youxi') {
        icon = 'youxi';
    } else if (action.type == 'sex') {
        icon = 'sex';
    } else if (action.type == 'okusuri') {
        icon = 'okusuri';
    } else if (action.type == 'url') {
        icon = 'url';
    } else if (action.type == 'iframe') {
        icon = 'url';
    } else if (action.type == 'twitter') {
        icon = 'twitter';
    } else if (action.type == 'facebook') {
        icon = 'facebook';
    } else if (action.type == 'instagram') {
        icon = 'instagram';
    } else if (action.type == 'telegram') {
        icon = 'telegram';
    } else if (action.type == 'bilibili') {
        icon = 'bilibili';
    } else if (action.type == 'youtube') {
        icon = 'youtube';
    } else if (action.type == 'game') {
        icon = 'game';
    } else if (action.type == 'js') {
        icon = 'exe';
    }
    const template = document.createElement('template');
    template.innerHTML = `
        <div class="iconwrap">
            <div class="icon">
                <img src="./images/${icon}.png" alt="${icon}">
                <div class="tag">${name}</div>
            </div>
        </div>`;
    if (action.type) {
        template.content.querySelector('.icon').addEventListener('click', (ev) => { console.log(key, action); execute(key, action); });
    }
    return template.content;
}

function processConfig1(config, startUp) {
    for (const key in config) {
        const value = config[key];
        if (value.type == 'folder') {
            processConfig(value.value, startUp);
        }
        if (value.link) {
            for (const link of value.link) {
                if (link == 'entry') {
                    createEntry(key, value);
                } else if (link == 'icon') {
                    document.querySelector('.desktop').appendChild(makeIcon(key, value));
                }
            }
        }
        if (startUp && value.start) {
            execute(key, value);
        }
    }
}

function processConfig(config, startUp) {
    for (const key in config) {
        const value = config[key];
        if (value.type == 'folder') {
            processConfig(value.value, startUp);
        }
        if (value.link) {
            for (const link of value.link) {
                if (link == 'entry') {
                    createEntry(key, value);
                } else if (link == 'icon') {
                    document.querySelector('.desktop').appendChild(makeIcon(key, value));
                }
            }
        }
        if (startUp && value.start) {
            execute(key, value);
        }
    }
}

async function loadDesktop() {
    const path = location.hash ? decodeURI(location.hash.slice(1)).split('/') : null;
    processConfig(config, !path);
    if (path) {
        const traverse = { key: null, value: null, next: config };
        let error = false;
        for (const frag of path) {
            if (!frag) { continue; }
            if (!traverse.next) { error = true; break; }
            if (traverse.next[frag]) {
                traverse.key = frag;
                traverse.value = traverse.next[frag];
                traverse.next = traverse.value.type == 'folder' ? traverse.value.value : null;
            } else { error = true; break; }
        }
        if (!error) {
            traverse.value.hash = location.hash;
            execute(traverse.key, traverse.value);
        } else {
            location.href = '/error';
        }
    }
}

async function loadCounter(counterUrl) {
    const divCounter = document.createElement('div');
    divCounter.classList.add('counter');
    const response = await fetch(counterUrl);
    if (response.ok) {
        divCounter.textContent = await response.text();
    } else {
        divCounter.textContent = '*******';
    }
    document.querySelector('.status').appendChild(divCounter);
}

prepareDom();
loadDesktop();