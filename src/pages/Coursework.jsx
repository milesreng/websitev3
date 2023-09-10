import React, { Component } from 'react'
import Course from '../components/Course'

class Coursework extends Component {
    render() {
        return (
            <div className="text-white flex flex-col min-h-screen gap-8">
                <div className="">
                    <h1 className="text-4xl md:text-5xl uppercase text-center md:text-left">Coursework</h1>
                    <p className="text-xl">Duke University</p>
                    <p className="text-lg">GPA: 3.95/4.0</p>
                    <p className="text-md">B.S. Computer Science, A.B.2 Global Health</p>
                </div>
                <div className="flex flex-row flex-wrap justify-around">
                    <Course code="COMPSCI 316" title="Database Systems" desc="Topics include data modeling, database design theory, 
                        data definition and manipulation languages (SQL and NoSQL), database application 
                        programming interfaces, storage and indexing, query processing and optimization, 
                        parallel and distributed data processing and transaction processing." 
                        url="https://google.com" img="https://miro.medium.com/v2/resize:fit:1400/1*PsnGY7NGiSg7rF2TkVFEUA.png" 
                        imgalt="database diagram" />
                    <Course code="COMPSCI 330" title="Design & Analysis of Algorithms" desc="Techniques for designing and analyzing data structures
                            and algorithms, e.g., divide-and-conquer, greedy algorithms, parallel algorithms, graph
                            algorithms, intractability, and large-scale computing." url="https://google.com"
                    img="https://blog-c7ff.kxcdn.com/blog/wp-content/uploads/2019/11/Banner-Blog-1A-1.jpg" imgalt="" />
                    <Course code="STA 210" title="Regression Analysis" desc="Topics include analyzing multivariate data sets, 
                            emphasizing analysis of variance, linear regression, and logistic regression. Learn techniques for 
                            checking the appropriateness of proposed models, such as residual analyses 
                            and case influence diagnostics, and techniques for selecting models." url="https://google.com"
                    img="https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/201003/20100315144150-1_0.jpg?itok=xksoTT8q" imgalt="" />
                    <Course code="COMPSCI 230" title="Discrete Math" desc="Topics include mathematical notations, logic, and proof; 
                    linear and matrix algebra; graphs, digraphs, trees, representations, and algorithms; counting, permutations, 
                    combinations, discrete probability, Markov models; advanced topics from algebraic structures, geometric structures, 
                    combinatorial optimization, and number theory. " url="https://google.com"
                    img="https://th-i.thgim.com/public/incoming/9ubnob/article65714750.ece/alternates/LANDSCAPE_1200/08EPBS_MATHS.jpg" imgalt="" />
                </div>
            </div>
        )
    }
}

export default Coursework