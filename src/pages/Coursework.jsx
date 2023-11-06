import React from 'react'
import Course from '../components/Course'

const Coursework = () => {
  return (
    <div className='text-gunmetal flex flex-col min-h-screen gap-4 font-content'>
      <div className='text-center md:text-left md:pt-8'>
        <h1 className='text-4xl md:text-5xl uppercase py-2 font-header'>Coursework</h1>
        <p className='text-xl'>Duke University, Class of 2025</p>
        <p className='text-lg'>GPA: 3.95/4.0</p>
        <p className='text-lg'>B.S. Computer Science and Global Health</p>
      </div>
      <div className='flex flex-row flex-wrap justify-around'>
        <Course isLeft={true}
          code='COMPSCI 316' 
          title='Database Systems' 
          desc='Topics include data modeling, database design theory, 
            data definition and manipulation languages (SQL and NoSQL), database application 
            programming interfaces, storage and indexing, query processing and optimization, 
            parallel and distributed data processing and transaction processing.' 
          url='https://sites.duke.edu/compsci_316d_001_f23' 
          img='https://miro.medium.com/v2/resize:fit:1400/1*PsnGY7NGiSg7rF2TkVFEUA.png' 
          imgalt='database diagram'
          languages={['postgresql', 'mongodb', 'python', 'flask']} />
        <Course isLeft={false}
          code='COMPSCI 330' 
          title='Design &amp; Analysis of Algorithms' 
          desc='Techniques for designing and analyzing data structures
            and algorithms, e.g., divide-and-conquer, greedy algorithms, parallel algorithms, graph
            algorithms, intractability, and large-scale computing.' 
          url='https://courses.cs.duke.edu/current/compsci330/index.html'
          img='https://blog-c7ff.kxcdn.com/blog/wp-content/uploads/2019/11/Banner-Blog-1A-1.jpg' 
          imgalt='various tools'
          languages={['java', 'python']} />
        <Course  isLeft={true}
          code='COMPSCI 250' 
          title='Computer Architecture' 
          desc='The objective of this course is to learn how 
              computers work, focusing on how the computer hardware executes the software. The course focuses on: instruction 
              sets, assembly language programming, basic digital logic design, processor design, memory system design, and 
              input/output.  ' 
          url='http://people.ee.duke.edu/~sorin/ece250/' 
          img='https://images.unsplash.com/photo-1620283085439-39620a1e21c4?auto=format&fit=crop&q=80&w=3387&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
          imgalt='computer chip'
          languages={['c']} />
        <Course  isLeft={false}
          code='COMPSCI 230' 
          title='Discrete Math' 
          desc='Topics include mathematical notations, logic, and proof; 
              linear and matrix algebra; graphs, digraphs, trees, representations, and algorithms; counting, permutations, 
              combinations, discrete probability, Markov models; advanced topics from algebraic structures, geometric structures, 
              combinatorial optimization, and number theory. ' 
          url='https://courses.cs.duke.edu/spring20/compsci230/'
          img='https://th-i.thgim.com/public/incoming/9ubnob/article65714750.ece/alternates/LANDSCAPE_1200/08EPBS_MATHS.jpg' 
          imgalt='math calculations'
          languages={['latex']} />
        <Course  isLeft={true}
          code='STA 210' 
          title='Regression Analysis' 
          desc='Topics include analyzing multivariate data sets, 
            emphasizing analysis of variance, linear regression, and logistic regression. Learn techniques for 
            checking the appropriateness of proposed models, such as residual analyses 
            and case influence diagnostics, and techniques for selecting models.' 
          url='https://sta210-fa23.netlify.app'
          img='https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/201003/20100315144150-1_0.jpg?itok=xksoTT8q' 
          imgalt='scatterplot with diagonal line'
          languages={['r']} />
        <Course  isLeft={false}
          code='MATH 218' 
          title='Linear Algebra' 
          desc='Topics include Gaussian elimination as the 
            fundamental process, examination of matrix factorizations, orthogonality, and associated vector 
            subspaces, least squares problems, eigenvalue problems, the singular value decomposition and 
            principal component analysis will also be studied as fundamental tools for solving data-driven 
            applications.' 
          url='https://services.math.duke.edu/~jdr/2122f-218/' 
          img='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Linear_subspaces_with_shading.svg/1200px-Linear_subspaces_with_shading.svg.png' 
          imgalt='shapes in 3d plane' />
        <Course  isLeft={true}
          code='COMPSCI 342' 
          title='Information and the Internet' 
          desc='Explores a wide range of 
            topics related to Intellectual Property (IP) law, cybersecurity, and emerging technologies. Students learn 
            about legal aspects such as copyrights, patents, and open-source licensing. Delves into 
            technical subjects including internet architecture, streaming technologies, and blockchain. Additionally, 
            it covers critical issues like online privacy, AI bias, cybersecurity, and encryption.' 
          url='https://courses.cs.duke.edu/spring23/compsci342/' 
          img='https://www.creativefabrica.com/wp-content/uploads/2018/11/Information-internet-technology-logo-by-DEEMKA-STUDIO.jpg' 
          imgalt='information technology logo graphic'
          languages={['postgresql']} />
        <Course  isLeft={false}
          code='COMPSCI 201'
          title='Data Structures &amp; Algorithms' 
          desc='Learn to analyze, use, and design data structures and algorithms in an object-oriented 
          language (Java) to solve computational problems. Emphasis on abstraction including interfaces 
          and abstract data types for lists, trees, sets, tables/maps, and graphs. Implementation and 
          evaluation of programming techniques including recursion. Intuitive and rigorous analysis of algorithms.' 
          url='https://servicelearning.duke.edu/courses/global-health-ethics-policy-choice-value-conflict' 
          img='https://images.unsplash.com/photo-1585858229735-cd08d8cb510d?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
          imgalt='map of covid-19 spread'
          languages={['java']} />
      </div>
    </div>
  )
}

export default Coursework