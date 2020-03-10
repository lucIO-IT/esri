export var smartphoneTemplate = `
    <style>
        .smartphone {
            background: rgb(85,85,85);
            border: 2px solid rgb(65,65,65);
            min-height: 400px;
            width: 220px;
            border-radius: 15px;
            -webkit-border-radius: 15px;
            -moz-border-radius: 15px;
            padding: 5px;
            -webkit-box-shadow: 0 10px 6px -6px #777;
            -moz-box-shadow: 0 10px 6px -6px #777;
            box-shadow: 0 10px 6px -6px #777;
        }
        .phone_header, phone_footer {
            height: 25px;
        }
        .screen {
            background: rgba(185,185,185, 0.25);
            height: 350px;
            width: 100%;
            position: relative;
        }
        .info_bar {
            width: 100%;
            height: 25px;
            padding: 5px;
            position: absolute;
        }
        .top {
            top: 0;
            left: 0;
        }
        .bottom {
            bottom: 0;
            left: 0;
        }
        .media_content {
            width: 100%;
            height: calc(100% - 60px);
            padding: 30px 0;
            overflow: hidden;
        }
        .image {
            width: 100%;
            height: 100%;
        }
        .flex-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .flex-table {
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        .spy {
            display: block;
            padding: 5px;

        }
        .spy::after {
            content: '';
            display: block;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            background: red;
        }
        .footer-bar-icon {
            display: block;
            height: 6px;
            width: 60px;
            background: white;
            border-radius: 5px;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
        }
        .signal span {
            display: inline-block;
            width: 4px;
            background: white;
            border-radius: 3px;
            -webkit-border-radius: 3px;
            -moz-border-radius: 3px;
        }
        .icon {
            display: block;
            width: 13px;
            height: 13px;
            background: transparent;
            border: 2px solid white;
            border-radius: 2px;
            -webkit-border-radius: 2px;
            -moz-border-radius: 2px;
        }
        .icon.circle {
            border-radius: 50%;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
        }
        .icon.triangle {
            transform: rotate(135deg);
            margin-top: 2px;
            border-width: 0 3px 3px 0;
            width: 11px;
            height: 11px;
        }

    </style>
    <div class="smartphone">
        <div class="phone_header">
            <span class="spy"></span>
        </div>
        <div class="screen">
            <div class="info_bar top flex-bar">
                <div class="signal">
                    <span style="height: 6px;"></span>
                    <span style="height: 8px;"></span>
                    <span style="height: 10px;"></span>
                </div>
            </div>
            <div class="media_content">
                <img id="target-image" src="../static/img/banner.jpg" class="image"/>
            </div>
            <div class="info_bar bottom flex-table">
                <span class="icon triangle">
                    <span class="inner-triangle"></span>
                </span>
                <span class="icon circle"></span>
                <span class="icon"></span>
            </div>
        </div>
        <div class="phone_footer flex-table">
            <span class="footer-bar-icon" style="margin-top: 10px;"></span>
        </div>
    </div>
`;