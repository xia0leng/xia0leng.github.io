var config = {
    readme: {
		start: true,
        name: '欢迎 Welcome',
        type: 'md',
        value: 'readme',
		urlPath: '/',
        style: ['medium'],
        link: ['entry', 'icon'],
        icon: 'help'
    },
	event05: {
        name: '通知 Notice',
        type: 'md',
        value: 'event05',
		urlPath: '/',
		style: ['ultrasmall'],
    },
	photos: {
        name: '照片 Photos',
        type: 'folder',
		icon:'photos',
        value: {
			DKFLBivUdQ: {
                name: 'DKFL-BivUdQ',
                type: 'iframe',
				icon:'img',
                value: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fxlnww%2Fposts%2Fpfbid04EKaL2mssTNjAmniRhHRQ2fG1HvRDv6n8umwAHNvZW1vfKjUkAhE9HEwg5bsSpXMl&show_text=true',
                style: ['large']
            },
			DJvZVaBIbKD: {
                name: 'DJvZVaBIbKD',
                type: 'iframe',
				icon:'img',
                value: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fxlnww%2Fposts%2Fpfbid02S967B3yGwmP99q3KbT38X9XUhMYixZ8UBa2sNRXsVzdeEeWhN9FcrRTjmKWaxzTql&show_text=true',
                style: ['large']
            },
            DJe7EsKv8Ft: {
                name: 'DJe7EsKv8Ft',
                type: 'iframe',
				icon:'img',
                value: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fxlnww%2Fposts%2Fpfbid0Y6qcAH1VSmjXbta3bo9Seyy9z6Upe9brqXMznhHAi73FJFdZvhggcmDfHnMmBfLXl&show_text=true',
                style: ['large']
            },
			DH0HZ8Nvc0p: {
                name: 'DH0HZ8Nvc0p',
                type: 'iframe',
				icon:'img',
                value: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fxlnww%2Fposts%2Fpfbid02ButQG3qn33gtLZitJABxiYx4oKuRsBUqfTQmfQnDymBKZRQnD5XX5B9i8ihXCoaKl&show_text=true',
                style: ['large']
            },
			DB5h7o7IqJp: {
                name: 'DB5h7o7IqJp',
                type: 'iframe',
				icon:'img',
                value: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fxlnww%2Fposts%2Fpfbid02VjtTDg2qzwXt8ABa4h7qZbF6kzepGGEv8KJFDv5ZQRw3Jo13ne2p3WVYq8cv9n6pl&show_text=true',
                style: ['large']
            },
			C8oplrDBj5N: {
                name: 'C8oplrDBj5N',
                type: 'iframe',
				icon:'img',
                value: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fxlnww%2Fposts%2Fpfbid0j3Zu2BXd8bJmLggVciM8h2VPjQn5Cw82TBSvGTH9isQCdnezQnGDmBHmwPDGv3TXl&show_text=true',
                style: ['large']
            },
			DArqX9LmCe: {
                name: 'DArqX9LmCe',
                type: 'iframe',
				icon:'img',
                value: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fxlnww%2Fposts%2Fpfbid0oXPa2Sg5Ytnp7r4pU73q6YJmYGPScoURecVX3hxotqD25hfbk3FHYAkcNJmbiuWjl&show_text=true',
                style: ['large']
            },
			instagram: {
				name: '来ins看图喵 Ins',
				title: 'Instagram',
				type: 'js',
				icon:'instagram',
				value: 'instagram.js',
				urlPath: '/instagram',
				external: true,
				style: ['ultrasmall']
			},
        },
        desc: '这里汇聚了小冷的所有闪耀瞬间：舞台闪光、日常萌拍、偶尔流露的病娇小表情<br> All my shining moments—stage highlights, everyday cuteness, and the occasional yandere glance.',
        style: ['medium'],
        link: ['entry', 'icon']
    },
	stagevideos: {
        name: '舞台录像 Stage Videos',
        type: 'folder',
		icon:'stage',
        value: {
			DKFLBivUdQ: {
                name: '#あくあ色ぱれっと',
                type: 'url',
				icon:'videos',
                value: './fw/stagevideos/05.html',
                style: ['large']
            },
			DJvZVaBIbKD: {
                name: 'CHASE!',
                type: 'url',
				icon:'videos',
                value: './fw/stagevideos/04.html',
                style: ['large']
            },
			DB5h7o7IqJp: {
                name: 'Tiny Stars',
                type: 'url',
				icon:'videos',
                value: './fw/stagevideos/01.html',
                style: ['large']
            },
			bilibili: {
				name: '来b站听唱歌喵 bili',
				title: '哔哩哔哩 Bilibili',
        		type: 'js',
				icon:'bilibili',
        		value: 'bilibili.js',
				urlPath: '/bilibili',
				external: true,
				style: ['ultrasmall']
			},
			youtube: {
				name: '去yt看舞台喵 YT',
				title: 'YouTube',
        		type: 'js',
				icon:'youtube',
        		value: 'youtube.js',
				urlPath: '/youtube',
				external: true,
				style: ['ultrasmall']
    		},
        },
        desc: '这里收藏了小冷在舞台上最闪亮的瞬间<br> Here my brightest magical moments on stage.',
        style: ['medium'],
        link: ['entry', 'icon']
    },
    medication: {
        name: '药物 Medication',
        type: 'okusuri',
        value: {
			Drugs: {
                name: '药物列表 Drugs',
                type: 'folder',
				icon:'okusurifolder',
                value: {
            		DXM: {
                		name: '右美沙芬',
                		type: '123',
                		value: './fw/drugs/DXM.html',
						urlPath: '/Drugs/DXM',
                		style: ['large']
            		},
            		The_harm_of_dextromethorphan: {
						name: '右美沙芬的危害专题',
						type: '123',
						value: './fw/drugs/The_harm_of_dextromethorphan.html',
						style: ['large']
					},
					ATD: {
						name: '金刚烷胺',
						type: '123',
						value: './fw/drugs/ATD.html',
						style: ['large']
					},
					PR: {
						name: '普瑞巴林',
						type: '123',
						value: './fw/drugs/PR.html',
						style: ['large']
					},
					CDI: {
						name: '可待因',
						type: '123',
						value: './fw/drugs/CDI.html',
						style: ['large']
					},
					DHCDI: {
						name: '二氢可待因/白兔BRON其一',
						type: '123',
						value: './fw/drugs/DHCDI.html',
						style: ['large']
					},
					MMT: {
						name: '美金刚',
						type: '123',
						value: './fw/drugs/MMT.html',
						style: ['large']
					},
					TMD: {
						name: '曲马多',
						type: '123',
						value: './fw/drugs/TMD.html',
						style: ['large']
					},
					ZD: {
						name: 'Z药物',
						type: '123',
						value: './fw/drugs/ZD.html',
						style: ['large']
					},
					BZD: {
						name: '苯二氮卓类药物',
						type: '123',
						value: './fw/drugs/BZD.html',
						style: ['large']
					},
					Opioids: {
						name: '阿片类药物',
						type: '123',
						value: './fw/drugs/Opioids.html',
						style: ['large']
					},
					RTL: {
						name: '哌醋甲酯',
						type: '123',
						value: './fw/drugs/RTL.html',
						style: ['large']
					},
					KTM: {
						name: '氯胺酮',
						type: '123',
						value: './fw/drugs/KTM.html',
						style: ['large']
					},
					EtOH: {
						name: '乙醇',
						type: '123',
						value: './fw/drugs/EtOH.html',
						style: ['large']
					},
					Cigarette: {
						name: '香烟',
						type: '123',
						value: './fw/drugs/Cigarette.html',
						style: ['large']
					},
					ACL: {
						name: '槟榔碱',
						type: '123',
						value: './fw/drugs/ACL.html',
						style: ['large']
					},
					SRIs: {
						name: '血清素再摄取抑制剂',
						type: '123',
						value: './fw/drugs/SRIs.html',
						style: ['large']
					},
					AES: {
						name: '止吐药',
						type: '123',
						value: './fw/drugs/AES.html',
						style: ['large']
					},
					VPA: {
						name: '丙戊酸',
						type: '123',
						value: './fw/drugs/VPA.html',
						style: ['large']
					},
					NFP: {
						name: '奈福泮',
						type: '123',
						value: './fw/drugs/NFP.html',
						style: ['large']
					},
					DPX: {
						name: '地芬诺酯',
						type: '123',
						value: './fw/drugs/DPX.html',
						style: ['large']
					},
					QTP: {
						name: '喹硫平',
						type: '123',
						value: './fw/drugs/QTP.html',
						style: ['large']
					},
					RPD: {
						name: '利培酮',
						type: '123',
						value: './fw/drugs/RPD.html',
						style: ['large']
					},
					DMH: {
						name: '茶苯海明',
						type: '123',
						value: './fw/drugs/DMH.html',
						style: ['large']
					},
					PVR: {
						name: '喷托维林',
						type: '123',
						value: './fw/drugs/PVR.html',
						style: ['large']
					},
					THP: {
						name: '苯海索',
						type: '123',
						value: './fw/drugs/THP.html',
						style: ['large']
					},
					EI: {
						name: '酶抑制剂',
						type: '123',
						value: './fw/drugs/EI.html',
						style: ['large']
					},
					SPM: {
						name: '补充剂',
						type: '123',
						value: './fw/drugs/SPM.html',
						style: ['large']
					},
					CFI: {
						name: '咖啡因',
						type: '123',
						value: './fw/drugs/CFI.html',
						style: ['large']
					},
					TAN: {
						name: '茶氨酸',
						type: '123',
						value: './fw/drugs/TAN.html',
						style: ['large']
					},
					MGT: {
						name: '苏糖酸镁',
						type: '123',
						value: './fw/drugs/MGT.html',
						style: ['large']
					},
					PCT: {
						name: '吡拉西坦',
						type: '123',
						value: './fw/drugs/PCT.html',
						style: ['large']
					},
					MOP: {
						name: '吗啡',
						type: '123',
						value: './fw/drugs/MOP.html',
						style: ['large']
					},
					GBP: {
						name: '加巴喷丁',
						type: '123',
						value: './fw/drugs/GBP.html',
						style: ['large']
					},
					BCF: {
						name: '巴氯芬',
						type: '123',
						value: './fw/drugs/BCF.html',
						style: ['large']
					},
					PPF: {
						name: '丙泊酚',
						type: '123',
						value: './fw/drugs/PPF.html',
						style: ['large']
					},
					ZPD: {
						name: '唑吡坦',
						type: '123',
						value: './fw/drugs/ZPD.html',
						style: ['large']
					},
					ZPO: {
						name: '扎来普隆',
						type: '123',
						value: './fw/drugs/ZPO.html',
						style: ['large']
					},
					ZPC: {
						name: '佐匹克隆',
						type: '123',
						value: './fw/drugs/ZPC.html',
						style: ['large']
					},
					DPD: {
						name: '地芬尼多',
						type: '123',
						value: './fw/drugs/DPD.html',
						style: ['large']
					},
					PMZ: {
						name: '异丙嗪',
						type: '123',
						value: './fw/drugs/PMZ.html',
						style: ['large']
					},
					TXT: {
						name: '托莫西汀',
						type: '123',
						value: './fw/drugs/TXT.html',
						style: ['large']
					},
					OZP: {
						name: '奥氮平',
						type: '123',
						value: './fw/drugs/OZP.html',
						style: ['large']
					},
					ARP: {
						name: '阿立哌唑',
						type: '123',
						value: './fw/drugs/ARP.html',
						style: ['large']
					},
					ASP: {
						name: '氨磺必利',
						type: '123',
						value: './fw/drugs/ASP.html',
						style: ['large']
					},
					compound: {
						name: '复方专题',
						type: '123',
						value: './fw/drugs/compound.html',
						style: ['large']
					},
					DPH: {
						name: '苯海拉明',
						type: '123',
						value: './fw/drugs/DPH.html',
						style: ['large']
					},
				},
				urlPath: '/Drugs',
				style: ['medium']
			},
			Effects: {
                name: '药物效果 Effects',
                type: 'folder',
				icon:'okusurifolder',
                value: {
                    Dissociation: {
						name: '解离',
						type: 'md2',
						value: './fw/effects/Dissociation.html',
						style: ['large']
					},
					Antidissociation: {
						name: '反解离',
						type: 'md2',
						value: './fw/effects/Antidissociation.html',
						style: ['large']
					},
					Delirium: {
						name: '谵妄',
						type: 'md2',
						value: './fw/effects/Delirium.html',
						style: ['large']
					},
					Introduction_to_Hallucination: {
						name: '幻觉简述',
						type: 'md2',
						value: './fw/effects/Introduction_to_Hallucination.html',
						style: ['large']
					},
					Opioids: {
						name: '阿片类麻醉',
						type: 'md2',
						value: './fw/drugs/Opioids.html',
						style: ['large']
					},
					BZD: {
						name: '苯二氮卓类',
						type: 'md2',
						value: './fw/drugs/BZD.html',
						style: ['large']
					},
					SRIs: {
						name: '血清素再摄取抑制SRI',
						type: 'md2',
						value: './fw/drugs/SRIs.html',
						style: ['large']
					},
                },
				urlPath: '/Effects',
				style: ['medium']
            },
			drugcombination: {
                name: '药物联用',
                type: 'md2',
                value: './fw/effects/Combination_drugs.html',
                style: ['large']
            },
			odw: {
                name: 'OverdoseWiki',
                type: 'js',
				icon:'odw',
                value: 'odw.js',
				external: true,
                style: ['ultrasmall']
            }
        },
        desc: '这是对odwiki上所列出的所有药物说明的备份存档<br> This is a backup archive of all the drug descriptions listed on odwiki.<br> ⚠️请减少od次数⚠️也请安全的使用药物<br> ⚠️Please reduce the number of overdoses⚠️ and use drugs safely.',
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
	articles: {
        name: '文章 Articles',
        type: 'folder',
		icon:'articles',
        value: {
            1922157354659021001: {
                name: '对话小冷「从7万到 A7：用逻辑和数据打造高胜率的交易系统」',
                type: 'md2',
                value: './articles/1922157354659021001.html',
				urlPath: '/articles/1922157354659021001',
                style: ['large']
            },
        },
        desc: '小冷的想法和对你的喜欢都在这里<br> All of my thoughts—and my fondness for you—are right here.',
        style: ['medium'],
        link: ['entry', 'icon']
    },
	bitmex: {
        name: 'BitMEX',
        type: 'folder',
		icon:'bitmexxln',
        value: {
            tradepanel: {
                name: '交易面板 Trade Panel',
                type: 'js',
				icon:'bitmex',
                value: 'bitmexapp.js',
				external: true,
                style: ['ultrasmall']
            },
			signup: {
                name: '注册 Sign Up',
                type: 'js',
				icon:'bitmex',
                value: 'bitmexsignup.js',
				external: true,
                style: ['ultrasmall']
            },
			bitmexchinese: {
                name: '中文 CN Chat Group',
                type: 'js',
				icon:'telegram',
                value: 'bitmexchinese.js',
				external: true,
                style: ['ultrasmall']
            },
			authenticatorandroid: {
                name: 'Authenticator (Android)',
                type: 'js',
				icon:'authenticator',
                value: 'authenticatorandroid.js',
				external: true,
                style: ['ultrasmall']
            },
			authenticatorios: {
                name: 'Authenticator (iOS)',
                type: 'js',
				icon:'authenticator',
                value: 'authenticatorios.js',
				external: true,
                style: ['ultrasmall']
            },
        },
        desc: '不是小冷挣到钱最多的交易所，但是是小冷最喜欢的交易所<br> It&#39;s not the exchange where I made the most money, but it&#39;s my favorite.',
        style: ['medium'],
        link: ['entry', 'icon']
    },
    liq: {
        name: 'Liq™',
        type: 'folder',
		icon:'liq',
        value: {
            llss: {
                name: 'L²S²',
                type: 'iframe',
				icon:'L²S²',
                value: './llss/index.html',
				urlPath: '/llss',
                style: ['large']
            },
        },
        desc: 'Liq™ Engine是我们的下一代数字货币衍生品交易引擎<br> Liq™ Engine is our next generation of cryptocurrency derivatives trading engine.',
        style: ['medium'],
        link: ['entry', 'icon']
    },
	liyuu: {
        name: 'Liyuu',
        type: 'folder',
		icon:'liq',
        value: {
            llss: {
                name: 'L²S²',
                type: 'iframe',
				icon:'L²S²',
                value: './llss/index.html',
				urlPath: '/llss',
                style: ['large']
            },
        },
        desc: 'Liq™ Engine是我们的下一代数字货币衍生品交易引擎<br> Liq™ Engine is our next generation of cryptocurrency derivatives trading engine.',
        style: ['medium'],
    },
    support: {
        name: '支持 Support',
        type: 'folder',
		icon:'support',
        value: {
            contact: {
                name: '联系 Contact',
                type: 'url',
				icon:'support',
                value: './contact.html',
				urlPath: '/contact',
                style: ['large']
            },
            pgp: {
                name: 'PGP Public Key Block',
                type: 'md2',
                value: './support/pgp.html',
                style: ['large']
            }
        },
        desc: '需要联系小冷的团队吗？无论你是遇到问题还是有疑问，无论简单或复杂，我们始终在这里为你提供帮助<br> Need to get in touch with Xiaoleng&#39;s team? Whether you&#39;re encountering an issue or have questions, simple or complex, we&#39;re always here to assist you.',
        style: ['medium'],
        link: ['entry', 'icon']
    },
    legal: {
        name: '法律 Legal',
        type: 'folder',
		icon:'legal',
        value: {
            terms: {
                name: '条款和隐私声明 Terms &amp; Privacy Notice',
                type: 'md2',
                value: './terms.html',
				urlPath: '/terms',
                style: ['large']
            },
            dh: {
                name: '数据处理要求 Data Handling Requirement',
                type: 'md2',
                value: './legal/data-handle.html',
				urlPath: '/legal/data-handle',
                style: ['large']
            }
        },
        desc: '与你最可爱的小冷之间的协议，致力于保护用户权利，确保数据安全，并提供透明的服务规范<br> Agreement between you and your cutest idol Xiaoleng, committed to protecting user rights, ensuring data security, and providing transparent service regulations.',
        style: ['medium'],
        link: ['entry', 'icon']
    },
	radio: {
        name: '冷喵广播 Follow me',
        type: 'folder',
		icon:'radio',
        value: {
			x: {
				name: 'X',
				type: 'js',
				icon:'x',
				value: 'x.js',
				urlPath: '/x',
				external: true,
				style: ['ultrasmall']
			},
			telegram: {
				name: 'Telegram',
        		type: 'js',
				icon:'telegram',
        		value: 'telegram.js',
				urlPath: '/telegram',
				external: true,
				style: ['ultrasmall']
    		},
    		instagram: {
				name: 'Instagram',
				type: 'js',
				icon:'instagram',
				value: 'instagram.js',
				urlPath: '/instagram',
				external: true,
				style: ['ultrasmall']
			},
			threads: {
				name: 'Threads',
				type: 'js',
				icon:'threads',
				value: 'threads.js',
				urlPath: '/threads',
				external: true,
				style: ['ultrasmall']
    		},
    		bilibili: {
				name: '哔哩哔哩 Bilibili',
        		type: 'js',
				icon:'bilibili',
        		value: 'bilibili.js',
				urlPath: '/bilibili',
				external: true,
				style: ['ultrasmall']
			},
        },
		urlPath: 'follow-me',
        desc: '本台将不定期播送来自小冷的：<br>自拍、照片、对你们的喜欢，以及情绪碎片<br> This station will occasionally bring you broadcasts from Xiaoleng:<br>selfies, photos, my affection for you, and fragments of emotion.',
        style: ['medium'],
        link: ['entry', 'icon']
    },
	install: {
		name: '安装 Install',
    	type: 'js',
    	icon: 'install',
    	value: 'install.js',
		link: ['entry', 'icon'],
    	style: ['install']
	},
	passwords: {
		name: 'Passwords Backup',
    	type: 'iframe',
    	icon: '',
    	value: './passwords/index.html',
		urlPath: '/passwords',
    	style: ['large']
	},
	browserling: {
		name: 'Browserling',
    	type: 'iframe',
    	icon: '',
    	value: 'https://www.browserling.com',
		urlPath: '/browserling',
    	style: ['large']
	},
	notice: {
        name: '通知 Notice',
        type: 'md',
        value: 'notice',
		urlPath: '/',
		style: ['ultrasmall']
    },
	ddos: {
        name: '站点状态公告 Service Status Notice',
        type: 'md',
        value: 'ddos',
		urlPath: '/',
		style: ['small']
    },
	emotional01: {
        name: '警告 Alert',
        type: 'md',
        value: 'emotional01',
		urlPath: '/',
		style: ['ultrasmall'],
    },
	emotional02: {
        name: '警告 Alert',
        type: 'md',
        value: 'emotional02',
		urlPath: '/',
		style: ['ultrasmall'],
    },
	emotional03: {
        name: '警告 Alert',
        type: 'md',
        value: 'emotional03',
		urlPath: '/',
		style: ['ultrasmall'],
    }
};

// 如果浏览器不支持 :has 选择器，说明是旧版（例如 Chrome 107、Safari 15 以下）
const isOldBrowser = !CSS.supports("selector(:has(*))");

// 禁用欢迎弹窗，避免遮挡 fallback 提示
if (isOldBrowser && config.readme) {
  config.readme.start = false;
}

/* ---------- 优先级窗口顺序修正：存在urlPath时notice及emotional也始终排在最后 ---------- */
{
  const orderFix = {};
  for (const k of ['notice', 'emotional01', 'emotional02', 'emotional03']) {
    if (config[k]) {
      orderFix[k] = config[k];   // 1️⃣ 备份
      delete config[k];          // 2️⃣ 删除原位置
    }
  }
  Object.assign(config, orderFix); // 3️⃣ 重新插入到末尾
}

/* ---------- 把 ./foo/bar → /foo/bar，保持 http(s) 不动 ---------- */
function absPath(p) {
  if (!p) return p;
  if (p.startsWith('/') || /^https?:\/\//.test(p)) return p;   // 已经是绝对 / 外链
  return '/' + p.replace(/^\.?\/+/, '');                       // 去掉 ./ 或 /
}

// ✅ 自动获取 colorful.js 所在目录，并指向对应的 images 目录
const baseImagePath = (() => {
  const scripts = document.getElementsByTagName('script');
  for (let s of scripts) {
    if (s.src && s.src.includes('colorful.js')) {
      const url = new URL(s.src, location.href);
      url.pathname = url.pathname.replace(/\/[^/]+$/, '/../images/');
      return url.href;
    }
  }
  return '../images/';
})();

/* === 浏览器标题 / 描述同步 ============================= */
const pathHeadMap = {};                // urlPath ➜ { title, desc }

function applyHead(path) {
  const info = pathHeadMap[path];
  if (!info) return;

  /* <title> */
  document.title = info.title || document.title;

  /* <meta name="description"> */
  let meta = document.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', 'description');
    document.head.appendChild(meta);
  }
  if (info.desc) meta.setAttribute('content', info.desc);
}
/* ====================================================== */

const htmlConfig = {
    readme: `<h1 style="line-height: 100%; margin-block-start: 0.5em; margin-block-end: 0.05em;">欢迎来到小冷官方网站</h1>
    <h2 style="line-height: 100%; margin-block-start: 0em; margin-block-end: 0em;">Welcome to Xiaoleng Official Website</h2>
    <p><img src="./images/logo.png" alt="logo"></p>
    <p>这里是每天都在追逐星光梦想的你最可爱的小冷<br>
    I am your cutest Xiaoleng, chasing the dreams of starlight every day.</p>
    <p>和小冷一起在舞台上实现闪闪发光✨的梦想<br>
    With Xiaoleng, achieve our sparkling dreams on stage✨</p>
    <p>让我们沉溺于这场药物💊甜腻的梦中<br>
    Let's indulge in this sweet, 💊drug-filled dream.<br>
    也请来了解你最可爱的小偶像小冷<br>
    Also, come get to know Xiaoleng, your cutest idol.</p>
    <p>请多多关注小冷吧~<br>
    Please pay more attention to Xiaoleng~</p>`,
	notice: `
    <p>说起来…网站上的很多功能，在大陆网络下是打不开的🥺<br>
	Btw... Many features on this site aren’t available under mainland China’s network. 🥺</p>
    <p>要不要试试 ✨开个VPN✨ 或用国外网络，就可以和小冷一起玩辣！<br>
    Try using a VPN or a foreign network—   
	and everything will open up like magic! ✨</p>`,
	ddos: `
    <p>Xiaoleng Official Website正在承受DDoS 攻击。为了确保核心功能在线，我们临时关闭了部分资源包括CSS文件的分发<br>
	Xiaoleng Official Website is undergoing a DDoS attack. To keep core functions online, we have temporarily disabled delivery of some resources, including CSS files.</p>
    <p>如果你绕过首页，直接在浏览器地址栏输入子页面 URL，可能会看到脱离CSS的页面——内容仍可阅读，只是暂时没有样式<br>
	If you bypass the homepage and type a sub-page URL directly in the browser’s address bar, you might see a page without CSS — the content is still readable; it just has no styles for the moment.</p>
	<p>此措施仅是临时降载，Xiaoleng Official Website之数据及功能都不会受影响<br>
    This is only a temporary load-shedding measure; the data and functions of Xiaoleng Official Website will not be affected.</p>`,
	event05: `
    <p>小冷6月20日在上海AC漫展有演出！<br>
    I’ll perform at Shanghai AC on June 20!</p>
    <p>来找我玩喵~<br>
     Come and see me~</p>`,
	emotional01: `
    <p>要喜欢小冷喵~<br>
     Please like me a lot, nya~</p>`,
	emotional02: `
    <p>最喜欢你了！<br>
     I like you the most!</p>`,
	emotional03: `
    <p>你没有超级超级喜欢小冷，气气喵<br>
     You did not super super like me, I’m mad now</p>`,
}
const urlConfig = {'pasta.html': 'pasta.html'};
let windowId = 0;

const resolvePath = (key, action) => action.urlPath || ('/' + key);

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
	const path = window.dataset.urlPath || '/';
	history.pushState({}, '', path);
	applyHead(path);        // ← 新增：关闭 / 最小化后同步 head
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
		updatePathAfterChange(); 
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
		updatePathAfterChange(); 
    });

    return divWindow;
}

function createWindow(title, content, config, urlPath = '/') {
    const style = config && config.style ? config.style : [];
    const divWindow = makeWindow(title, style);
    if (content) {
        divWindow.children[1].appendChild(content);
    }
	divWindow.dataset.urlPath = urlPath;
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

function execute(key, action, urlPath = resolvePath(key, action)) {
    let name = key;
	let windowTitle = action.title || action.name;
    if (action.name) {
        name = action.name;
    }
    const config = {};
    if (action.style) {
        config.style = action.style;
    }
    const handler = {
        text: () => { 
			createWindow(name, document.createTextNode(action.value), config, urlPath);
		},
        html: () => {
            const template = document.createElement('template');
            template.innerHTML = action.value;
            createWindow(windowTitle, template.content, config, urlPath);
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
            createWindow(windowTitle, template.content, config, urlPath);
        },
		123: async () => {
		  const src = absPath(action.value);
		  const win = createWindow(windowTitle,
			  document.createTextNode('Loading…'), config, urlPath);
		  try {
			const r = await fetch(src);
			win.querySelector('.content').innerHTML = await r.text();
		  } catch (e) {
			win.querySelector('.content').textContent = '⚠️ Failed to load.';
			console.warn(e);
		  }
		},
		url: async () => {
		  const src = absPath(action.value);

		  // ① 立刻建壳，占位并分配 z-index
		  const win = createWindow(windowTitle,
			  document.createTextNode('Loading…'), config, urlPath);

		  // ② 后台拉取并填充
		  try {
			const r = await fetch(src);
			win.querySelector('.content').innerHTML = await r.text();
		  } catch (e) {
			win.querySelector('.content').textContent = '⚠️ Failed to load.';
			console.warn(e);
		  }
		},
        md: async () => {
            const response = htmlConfig[action.value];
            const template = document.createElement('template');
            template.innerHTML = response;
            createWindow(windowTitle, template.content, config, urlPath);
        },
		md2: async () => {
		  const win = createWindow(windowTitle,
			  document.createTextNode('Loading…'), config, urlPath);
		  try {
			const r = await fetch(action.value);
			win.querySelector('.content').innerHTML = await r.text();
		  } catch (e) {
			win.querySelector('.content').textContent = '⚠️ Failed to load.';
			console.warn(e);
		  }
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
            createWindow(windowTitle, template.content, config, urlPath);
        },
        iframe: () => {
          /* ① 建壳窗口并放入文本占位 */
          const win = createWindow(
            windowTitle,
            document.createTextNode('Loading…'),
            config,
            urlPath
          );

          const content   = win.querySelector('.content');
          const placeholder = content.firstChild;            // “Loading…” 这行

          /* ② 创建 iframe，先 display:none 挂到 DOM 里让它开始加载 */
          const iframe = document.createElement('iframe');
          iframe.src       = absPath(action.value);
          iframe.scrolling = 'no';
          iframe.style.border  = 'none';
          iframe.style.display = 'none';   // 等 onload 才显示
          content.appendChild(iframe);

          /* ③ 成功 → 替换占位；失败 → 显示错误文本 */
          iframe.onload  = () => {
            placeholder.remove();
            iframe.style.display = 'block';
          };
          iframe.onerror = () => {
            placeholder.textContent = '⚠️ Failed to load.';
            iframe.remove();
          };
        },
		js: () => {
		  const script = document.createElement('script');
		  script.src = absPath(`/js/${action.value}`);     // ←
		  const win = createWindow(windowTitle, null, config, urlPath);
		  window.root = win.children[1];
		  win.appendChild(script);
		},
    };
    if (!handler[action.type]) { return; }
    handler[action.type]();
	
	/* ------ 新增：记录并立刻应用 head 信息 ------ */
    pathHeadMap[urlPath] = {
        title: action.title || action.name || key,
        desc : action.desc  || ''          // 若没有 desc 就留空
    };
    applyHead(urlPath);
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
    } else if (action.type == 'okusuri') {
        icon = 'okusuri';
    } else if (action.type == 'url') {
        icon = 'url';
    } else if (action.type == 'iframe') {
        icon = 'url';
    } else if (action.type == 'js') {
        icon = 'exe';
	}
    const template = document.createElement('template');

	template.innerHTML = `
    <div class="iconwrap">
        <div class="icon">
            <img src="${baseImagePath}${icon}.png" alt="${icon}">
            <div class="tag">${name}</div>
        </div>
    </div>`;

	// 后处理：添加快捷方式箭头
	const iconEl = template.content.querySelector('.icon');
	const imgEl = iconEl.querySelector('img');

	// 包装 img 成一个可定位容器
	const wrapper = document.createElement('div');
	wrapper.style.position = 'relative';
	wrapper.style.display = 'inline-block';
	wrapper.appendChild(imgEl); // 把 img 移进去

	// 添加箭头
	if (action && action.external) {
		const arrow = document.createElement('img');
		arrow.src = './images/externel.png';
		arrow.alt = 'external';
		arrow.className = 'shortcut-arrow';
		wrapper.appendChild(arrow);
	}

	// 插回原来位置
	iconEl.insertBefore(wrapper, iconEl.firstChild);


    if (action.type) {
        template.content.querySelector('.icon').addEventListener('click', (ev) => { execute(key, action, resolvePath(key, action)); });
    }
    return template.content;
}

//取代旧的 processConfig —— 只收集弹窗，不 flush
function processConfig(config,
                       startUp,
                       parentPath = '',
                       popupQueue = []) {        // ← 收集 notice / emotional
  for (const key in config) {
    const value = config[key];

    /* ---------- 自动补 urlPath ---------- */
    const fullPath = parentPath + '/' + key;
    if (!value.urlPath) value.urlPath = fullPath;

    /* ---------- 递归处理子层 ---------- */
    if (['folder', 'okusuri'].includes(value.type)) {
      processConfig(value.value, startUp, fullPath, popupQueue);
    }

    /* ---------- 桌面图标 / 开始菜单 ---------- */
    if (value.link) {
      for (const link of value.link) {
        if (link === 'entry') createEntry(key, value);
        if (link === 'icon')  document.querySelector('.desktop')
                                       .appendChild(makeIcon(key, value));
      }
    }

    /* ---------- 收集/弹出窗口 ---------- */
    const isEventBlock = /^event\d+$/.test(key);
    const isNotice     = key === 'notice';
    const isEmotional  = /^emotional\d+$/.test(key);

    const mustFollowPage = (isEventBlock || isNotice || isEmotional) && !startUp;
    const targetPath     = mustFollowPage ? location.pathname : value.urlPath;

    if (isEventBlock && value.start) {
      /* eventXX：直接弹出但层级最低 */
      execute(key, value, targetPath);

    } else if ((isNotice || isEmotional) && value.start) {
      /* notice / emotional：先收集，稍后再弹（保证最顶层） */
      popupQueue.push([key, value, targetPath]);

    } else if (startUp && value.start) {
      /* 其它窗口只在首页自动弹一次 */
      execute(key, value, value.urlPath);
    }
  }
  return popupQueue;                                // ← 把队列往上返回
}

async function loadDesktop () {
  const segments = location.pathname.split('/').filter(Boolean);

  /* 1️⃣ 先跑配置，拿到 popupQueue（notice / emotional 等） */
  const popupQueue = processConfig(config, segments.length === 0, '');

  let queueFlushed = false;          // ← 标记队列是否已提前弹出

  /* 2️⃣ 如果 URL 指向子页面，优先打开；若不存在则出 404 */
  if (segments.length) {
    const result = findActionByPath(segments);

    if (result) {
      execute(result.key, result.action, location.pathname);

        } else {
      /* —— 404 情况：先弹 notice / emotional，再建 404 —— */
      for (const [k, v, p] of popupQueue) {
        execute(k, v, p);        // 弹窗先出现 → z-index 比 404 低
      }
      queueFlushed = true;       // 阻止后面再次 flush

      const html = await fetch('/404.html').then(r => r.text());
      const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1]
                || '<p>404 Not&nbsp;Found</p>';

      const tpl  = document.createElement('template');
      tpl.innerHTML = body;
      createWindow('404 Not Found', tpl.content,
                   { style: ['medium'] }, location.pathname); // 404 最后创建 → 最顶
    }
  }

  /* 3️⃣ 其余情况（首页或有效子页）再统一弹 notice / emotional */
  if (!queueFlushed) {
    for (const [k, v, p] of popupQueue) {
      execute(k, v, p);
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

// ✅ 监听浏览器前进后退，解析 pathname 自动还原窗口
window.addEventListener('popstate', () => {
    const segments = location.pathname.split('/').filter(Boolean);

    // 关闭所有窗口
    document.querySelectorAll('.window').forEach(win => win.remove());

    // 尝试查找匹配的 config 项
    const result = findActionByPath(segments);

    if (result) {
        execute(result.key, result.action, location.pathname);
    } else {
        // 若未匹配任何窗口项，显示 GitHub Pages 的 404 页面（地址栏保持不动）
        fetch('/404.html')
            .then(res => res.text())
            .then(html => {
                const bodyStart = html.indexOf('<body');
                const bodyOpen = html.indexOf('>', bodyStart) + 1;
                const bodyEnd = html.indexOf('</body>');
                const bodyContent = html.slice(bodyOpen, bodyEnd).trim() || '<p>404 Not Found</p>';

                const template = document.createElement('template');
                template.innerHTML = bodyContent;

                createWindow('404 Not Found', template.content, { style: ['medium'] }, location.pathname);
            });
    }
});

function updatePathAfterChange () {
  /* 只保留仍然可见的窗口 */
  const visibleWins = [ ...document.querySelectorAll('.window') ]
                        .filter(w => w.style.display !== 'none');

  /* 桌面空了 → 回到根路径 */
  if (visibleWins.length === 0) {
    history.pushState({}, '', '/');
    return;
  }

  /* 找到 z-index 最高的那个窗口 */
  let top = visibleWins[0];
  for (const w of visibleWins) {
    if (+(w.style.zIndex || 0) > +top.style.zIndex) top = w;
  }

  /* 把地址栏更新成它的 urlPath */
  const path = top.dataset.urlPath || '/';
  history.pushState({}, '', path);
  applyHead(path);      // ← 新增：切换窗口时同步 <title>/<meta>

}

// ✅ 根据 pathname 自动匹配 config 中的 action 递归在整棵 config 树里查找 urlPath
// – 只要有任何 item 的 urlPath（去掉开头 /）与 pathname 完全一致，就返回它
function findActionByPath(pathSegments, cfg = config) {
  const target = pathSegments.join('/');                // 例如 'contact' 或 'photos/DKFLBivUdQ'

  function dfs(tree) {
    for (const k in tree) {
      const item = tree[k];

      // 👉 是否命中
      if ((item.urlPath || '').replace(/^\/+/, '') === target) {
        return { key: k, action: item };
      }

      // 👉 继续向下递归
      if (item.value) {
        const found = dfs(item.value);
        if (found) return found;
      }
    }
    return null;
  }

  return dfs(cfg);
}