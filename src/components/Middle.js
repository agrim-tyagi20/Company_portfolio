import React from 'react'

const Middle = () => {
    return (
        <>
            <div className="content">

                <h1>Welcome to Moderna</h1>
                <h5> It is impossible to imagine modern businesses surviving without a website and/or a mobile application. <br />
                    From hospitality and retail, manufacturing to education,every domain is plush with businesses <br />
                    competing with each other by creating highly engaging websites and apps.</h5>
                <div className="newslatter">
                    <form>
                        <input type="email" name="email" id="mail" placeholder="Enter Email"></input>
                        <input type="submit" name="submit" value="Lets Start"></input>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Middle
